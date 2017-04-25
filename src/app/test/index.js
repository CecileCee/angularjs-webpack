// ES6 function : () => {}
// ES5 function : function () {}

// ES6 variables : let (modifiable) const (non-modifiable)
// ES6 variables : var (modifiable)

// On peut importer notre template html directement d'un fichier HTML
import testTemplate from './index.html';

// Une directive de base c'est un objet avec un template
const testDirective = () => {
  return {
    template: testTemplate
  }
}

export default testDirective;