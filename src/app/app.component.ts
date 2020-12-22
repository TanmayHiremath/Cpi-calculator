import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cpi-calculator';
  prevCPI='0';
  prevCredits='0';
  cpi=0;
  grade1=0;grade2=0;grade3=0;grade4=0;grade5=0;grade6=0;grade7=0;grade8=0;grade9=0;grade10=0;
  credits1=0;credits2=0;credits3=0;credits4=0;credits5=0;credits6=0;credits7=0;credits8=0;credits9=0;credits10=0;
  get_credits1(event){this.credits1 = parseInt(event.value);}
  get_grade1(event){this.grade1 = parseInt(event.value);}

  get_credits2(event){this.credits2 = parseInt(event.value);}
  get_grade2(event){this.grade2 = parseInt(event.value);}

  get_credits3(event){this.credits3 = parseInt(event.value);}
  get_grade3(event){this.grade3 = parseInt(event.value);}

  get_credits4(event){this.credits4 = parseInt(event.value);}
  get_grade4(event){this.grade4 = parseInt(event.value);}

  get_credits5(event){this.credits5 = parseInt(event.value);}
  get_grade5(event){this.grade5 = parseInt(event.value);}

  get_credits6(event){this.credits6 = parseInt(event.value);}
  get_grade6(event){this.grade6 = parseInt(event.value);}

  get_credits7(event){this.credits7 = parseInt(event.value);}
  get_grade7(event){this.grade7 = parseInt(event.value);}

  get_credits8(event){this.credits8 = parseInt(event.value);}
  get_grade8(event){this.grade8 = parseInt(event.value);}

  get_credits9(event){this.credits9 = parseInt(event.value);}
  get_grade9(event){this.grade9 = parseInt(event.value);}

  get_credits10(event){this.credits10 = parseInt(event.value);}
  get_grade10(event){this.grade10 = parseInt(event.value);}

  calculate_cpi(){
    this.cpi= (parseFloat(this.prevCPI)*parseInt(this.prevCredits)+this.grade1*this.credits1+this.grade2*this.credits2+this.grade3*this.credits3+this.grade4*this.credits4+this.grade5*this.credits5+this.grade6*this.credits6+this.grade7*this.credits7+this.grade8*this.credits8+this.grade9*this.credits9+this.grade10*this.credits10)/(parseInt(this.prevCredits)+this.credits1+this.credits2+this.credits3+this.credits4+this.credits5+this.credits6+this.credits7+this.credits8+this.credits9+this.credits10)
  }


}
