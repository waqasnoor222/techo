import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  mode: boolean = true;
  title!: string;
  emailId!: string;
  constructor(private observer: BreakpointObserver, private router: Router,public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['English', 'Italian']);
    // Set default language
    translate.setDefaultLang('English');
       //this.getTitleString();
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 100px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          console.log('over')
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          console.log('side')

        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  changeMode(){
    this.mode = !this.mode
  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
  //   getTitleString() {
  //   // asynchronous - gets translations then completes.
  //   this.translate.get(['TITLE', 'USER_INFO.EMAIL_ADDRESS'])
  //     .subscribe(translations => {
  //       this.title = translations['TITLE'];
  //       this.emailId = translations['USER_INFO.EMAIL_ADDRESS'];
  //     });
  // }
}
