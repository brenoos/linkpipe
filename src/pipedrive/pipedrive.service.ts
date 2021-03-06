import { Injectable } from '@nestjs/common';
import { DealDto } from '../deals/dto/deal.dto';
import { format, startOfDay } from 'date-fns';
import * as xml2js from 'xml2js';
import axios from 'axios';
import * as qs from 'qs';
import { DealsService } from 'src/deals/deals.service';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class PipedriveService {
  constructor(
    private readonly dealsService: DealsService,
    private readonly configService: ConfigService,
  ) {}

  async dealWon(dealPayload: DealDto): Promise<void> {
    const {
      person_name,
      update_time,
      value,
      title,
      products_count,
    } = dealPayload;

    const date = format(new Date(update_time), 'dd/MM/yyyy');

    const builder = new xml2js.Builder();
    const objToXML = {
      pedido: {
        data: date,
        cliente: {
          nome: person_name,
        },
        itens: {
          item: {
            codigo: 1,
            descricao: title,
            qtde: products_count,
            vlr_unit: value,
          },
        },
      },
    };

    const xml = builder.buildObject(objToXML);

    const { data } = await axios.post(
      `https://bling.com.br/Api/v2/pedido/json/&apikey=${this.configService.get(
        'API_KEY',
      )}`,
      qs.stringify({ xml }),
    );

    if (data.retorno.erros) {
      throw new Error(data.retorno.erros[0].erro.msg);
    }

    this.dealsService.store({
      date: startOfDay(new Date(update_time)),
      total_value: value,
    });
  }
}
