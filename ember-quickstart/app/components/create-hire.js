import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RegisterFormComponent extends Component {
  @tracked namebicycle;
  namebicycle = '';

  @action
  async submit(e) {
    e.preventDefault();
    this.user = await this.session.register(this.namebicycle);
    if (this.user.isValid) {
      this.router.transitionTo('index');
    }
  }
  
}
