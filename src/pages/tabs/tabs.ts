import { Component } from '@angular/core';

import { ListaPendentePage } from '../lista_pendente/lista_pendente';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaPendentePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
