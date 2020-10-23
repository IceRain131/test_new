import Service from '@ember/service';
import { action } from '@ember/object';
import ENV from 'ember-realworld/config/environment';

export default class SessionService extends Service {

  initSession() {
    let storedToken = this.getStoredToken();
    if (storedToken) {
      this.token = storedToken;
      return this.fetchUser();
    }
  }

  get isLoggedIn() {
    return !!this.token;
  }

  async fetch(url, method = 'GET') {
    let response = await fetch(`${ENV.APP.apiHost}${url}`, {
      method,
      headers: {
        Authorization: this.token ? `Token ${this.token}` : '',
      },
    });
    let payload = await response.json();
    return payload;
  }

  @action
  async register(namebicycle) {
    let bicycle = this.store.createRecord('user', {
        namebicycle,
    });
    try {
      await bicycle.save();
    } catch {
      // Registration returned errors
    } finally {
      this.bicycle = bicycle;
    }
    return bicycle;
  }
}
