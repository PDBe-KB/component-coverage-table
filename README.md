PDBe-KB Coverage Table Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/pdbe-kb-ping-component.svg?branch=master)](https://www.travis-ci.com/PDBe-KB/pdbe-kb-ping-component)
[![codecov](https://codecov.io/gh/PDBe-KB/component-coverage-table/branch/main/graph/badge.svg?token=QA6OCNOB1E)](https://codecov.io/gh/PDBe-KB/component-coverage-table)
[![Maintainability](https://api.codeclimate.com/v1/badges/4de133cf4cdd7ce170eb/maintainability)](https://codeclimate.com/github/PDBe-KB/component-coverage-table/maintainability)

This is the repository of a lightweight Angular 7+ web component that displays all the available PDB entries for a particular UniProt accession in a tabular format. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display information on devices that are to small to use the standard sequence feature viewer, ProtVista.

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-coverage-table/main/component-coverage-table.jpg">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-coverage-table.git
cd component-coverage-table
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

The main template should also have the following CSS import:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The pinging component can be added to any Angular7+ apps.

Import the component (e.g. in app.module.ts):
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverageTableComponent } from './coverage-table/coverage-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Adding the pinging component to a template:
```angular2html
<app-coverage-table [data]="data"></app-coverage-table>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-coverage-table/tags).

## Authors

* **Nurul Nadzirin** - *Initial work* - [nurulnad](https://github.com/nurulnad)
* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-coverage-table/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
