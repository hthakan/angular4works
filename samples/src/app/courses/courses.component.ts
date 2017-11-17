import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `<h2> {{title}} </h2>
             <img src="{{ imageUrl }}" />
             

             <table>
              <tr>
              
                <td [attr.colspan]="colSpan">

                <h2 [textContent]="title"> </h2>
                <img [src]="imageUrl" />
                
                </td>
              </tr>
             </table>
            
           
            <button class="btn btn-primary" [class.active]="isActive"> Save </button>

           
            <button [style.backgroundColor]="isActive ? 'blue' : 'white'"> Update </button>

           
            <div (click)="onDivClicked()">
             <button (click)="onSave($event)"> Send </button>
            </div>

            <input (keyup.enter)="onKeyUp()" />

            <input  (keyup.enter)="onKeyUp2($event)" />

            <input #email (keyup.enter)="onKeyUp3(email.value)" />

            <input [value]="mail" (keyup.enter)="mail = $event.target.value; onKeyUp4()" />

            <input [(ngModel)]="mail" (keyup.enter)="onKeyUp4()" />


            <ul>
              <li>
                {{products.name | uppercase | lowercase}} <br/>  
                {{products.price | number:'2.1-1' }} <br/> 
                {{products.count | number }} <br/> 
                {{products.discountPrice | currency: 'EUR':true:'2.2-2' }} <br/> 
                {{products.releaseDate | date:'shortDate' }}
              </li>
            </ul>


            <br/><br/><br/>

            {{ text | summary:10}}
  `

})
export class CoursesComponent {
  // <td [colspan]="colSpan" ></td>

  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";

  colSpan = 2;

  isActive = true;

  mail = "me@example.com";

  products = {
    name: "Product A",
    price: 184.8555,
    count: 30128,
    discountPrice: 15.9758,
    releaseDate: new Date(2016,3,1) 
  }


  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tristique massa, id tempus justo lacinia in. Sed pretium, ligula non mattis aliquet, sem purus suscipit magna, eget vehicula urna mi sed metus. Donec volutpat aliquam convallis. Sed ornare ligula nec libero laoreet";

  onSave($event) {
    //$event.stopPropagation();

    console.log("button was clicked", $event)
  }

  onDivClicked() {
    console.log("div was clicked")
  }

  onKeyUp() {
    console.log("ENTER was pressed")
  }

  onKeyUp2($event) {
    console.log($event.target.value)
  }

  onKeyUp3(email) {
    console.log(email)
  }

  onKeyUp4(){
    console.log(this.mail);
  }

}
