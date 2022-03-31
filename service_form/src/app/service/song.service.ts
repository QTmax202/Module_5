import { Injectable } from '@angular/core';
import {Song} from '../model/song';
@Injectable({
  providedIn: 'root'
})
export class SongService {

  playlist: Song[] = [
    {
      id: 'CX11yw6YL1w',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    },
    {
      id: '_Nfp7SB0IBA',
      name: 'Tuyển Tập Nhạc Việt Hay Nhất Từng Gây Bão Các Bảng Xếp Hạng Âm Nhạc -Những Ca Khúc Nhạc Trẻ Hay Nhất'
    }
  ];

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }

  constructor() { }
}
