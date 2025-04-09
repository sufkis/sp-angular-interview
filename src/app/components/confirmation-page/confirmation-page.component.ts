import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.scss'
})
export class ConfirmationPageComponent {
  protected appService = inject(AppService);
  protected router = inject(Router);

  displayedAddress = computed(() => {
    return this.appService.address();
  });

  onSendAddress() {
    this.appService.sendAddress(this.displayedAddress()).subscribe(data => {
      console.log("🚀 ~ ConfirmationPageComponent ~ onSendAddress ~ addressSent:", data);
    });
    this.router.navigate(['/address']);
  }
}
