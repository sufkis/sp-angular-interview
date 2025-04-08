import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.scss'
})
export class ConfirmationPageComponent {
  protected appService = inject(AppService);

  displayedAddress = computed(() => {
    return this.appService.address();
  })
}
