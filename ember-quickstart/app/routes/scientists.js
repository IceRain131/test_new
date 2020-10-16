import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Stels',
        'Merida',
        'Cube',
        'TREK',
        'Giant',
        'Specialized',
        'Schwinn',
        'GT',
        'Author',
        'Forward'];
  }
}