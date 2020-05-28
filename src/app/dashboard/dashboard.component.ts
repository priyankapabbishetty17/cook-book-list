import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Recipe} from '../model/recipe';
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BackendService]
})
export class DashboardComponent implements OnInit {
  rcpList: Recipe ;
  recipeInEdit: Recipe;
  recipe: Recipe;
  dummyArray: any[];

  constructor(private modalService: NgbModal, private backendService: BackendService) { }

  ngOnInit(): void {

    this.getRecipes();
    this.recipeInEdit = new class implements Recipe {
      creationTS: string;
      description: string;
      dishType: string;
      id: number;
      ingredients: string;
      instructions: string;
      noOfPeople: number;
      recipeName: string;
      serveCont: number;
    };
    this.dummyArray = [
      {
            id: 1,
            recipeName : 'Dal Bati',
            description : 'This is a Rajasthani special dish from India',
            creationTS: 'value1',
            distType: 'value2',
            ingredients: 'value3',
            instruction: 'value4',
            noOfPeople: 2
        },
      {
            id: 2,
            recipeName : 'Pav Bhaji',
            description : 'This is a bombay speical dish from India',
            creationTS: 'value1',
            distType: 'value2',
            ingredients: 'value3',
            instruction: 'value4',
            noOfPeople: 2
        }
      ];
  }

  saveRecipeModel(modal){
    modal.close('Save click');
    if (this.recipeInEdit.id){
      // update
    }else{
      // create
      this.backendService.add(this.recipeInEdit).subscribe( data => {
      });
    }
  }

  editRecipe(data: Recipe, content: any){
    this.recipeInEdit = data;
    this.openAdd(content);

  }
  openView(viewcontent){
    this.modalService.open(viewcontent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  openAdd(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getRecipes() {
    this.backendService.getRecipes().subscribe( data => {
      this.rcpList = data;
    });
  }
}
