import { Component, OnInit } from '@angular/core';
import { RemotesService } from "../../remotes/remotes.service";
import { Game } from "../../models/game";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})
export class BrowseGamesComponent implements OnInit {

  gameList: Game[];
  totalItems: number;
  itemsPerPage: number = 10;
  page: number = 1;
  list: Game[];
  searchTerm: string;

  constructor(private rs: RemotesService) {
    this.gameList = [];
  }

  ngOnInit() {
    if (localStorage.getItem('data') == null) {
      this.rs.getAllGames().subscribe(
        resp => {
          this.gameList = resp;
          this.gameList = this.gameList.slice(1)
          localStorage.setItem('data', JSON.stringify(this.gameList));
        },
        err => {

        }
      )
    }
    else {
      this.gameList = JSON.parse(localStorage.getItem('data'));
    }


  }

  sortFeature(sortby, order) {
    if (sortby == "score") {
      if (order == -1) {  // descending order
        this.gameList.sort((g1, g2) => g2.score - g1.score)
      }
      else {             // ascending order
        this.gameList.sort((g1, g2) => g1.score - g2.score);
      }
    }
    else if(sortby == "score"){
      if (order == -1) {  // descending order
        this.gameList.sort((g1, g2) => {
          if (g1.title < g2.title) {
            return 1;
          }
          if (g1.title > g2.title) {
            return -1;
          }
          return 0;
        })
      }
      else {             // ascending order
        this.gameList.sort((g1, g2) => {
          if (g1.title > g2.title) {
            return 1;
          }
          if (g1.title < g2.title) {
            return -1;
          }
          return 0;
        });
      }
    }
    else{
      this.gameList = JSON.parse(localStorage.getItem('data'));
    }
  }

  filterfeature(){
    
  }
}
