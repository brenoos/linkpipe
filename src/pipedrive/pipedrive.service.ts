import { Injectable } from '@nestjs/common';
import { DealDto } from './dto/deal.dto';
import { format } from 'date-fns';
import * as xml2js from 'xml2js';
import axios from 'axios';
import * as qs from 'qs';
@Injectable()
export class PipedriveService {
  async dealWon(dealPayload: DealDto): Promise<void> {
    const { person_name, update_time, value } = dealPayload;

    const builder = new xml2js.Builder();
    const objToXML = {
      pedido: {
        data: format(new Date(update_time), 'dd/MM/yyyy'),
        cliente: {
          nome: person_name,
        },
        itens: {
          item: {
            codigo: 1,
            descricao: 'Playstation 4',
            qtde: 1,
            vlr_unit: value,
          },
        },
      },
    };
    const xml = builder.buildObject(objToXML);
    const response = await axios.post(
      'https://bling.com.br/Api/v2/pedido/json/&apikey=c8bd2edf82dac52364e2ab77b4c05bdb488bf71ce0e342fe00df9ec7601cc9854b59c09b',
      qs.stringify({ xml }),
    );

    console.log(response.data);
  }
}
