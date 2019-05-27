import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
})
export class HomePage {
  public myDateOfBirth: String;

  ionViewDidEnter() {
    this.myDateOfBirth = "1999-10-28";
  }

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Incoming Parasite',
      message: 'You computer will shut down in approximately 30 seconds. Enjoy it while it lasts.',
      buttons: ['OK']
    });

    await alert.present();
  }
  pressMe() {
    alert("Congratulations, you have won $1,000!!");
  }

  public form = [  
    { val: 'Are you over 18?', isChecked: true },
    { val: 'Are you currently in Lisbon?', isChecked: false },
    { val: 'Do you want some extra dough?', isChecked: false }
];
}