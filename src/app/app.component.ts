import { Component } from '@angular/core';
import {BiometricWrapper} from '@awesome-cordova-plugins/biometric-wrapper/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private biometricWrapper: BiometricWrapper) {
    this.biometricWrapper.activateIris({'PID_XML': '&lt;pid-xml/>'})
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
