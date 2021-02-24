PDBe-KB Ping Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/pdbe-kb-coverage-table.svg?branch=master)](https://www.travis-ci.com/PDBe-KB/pdbe-kb-ping-component)
[![codecov](https://codecov.io/gh/PDBe-KB/pdbe-kb-coverage-table/branch/master/graph/badge.svg?token=GLYUFFF6QX)](https://codecov.io/gh/PDBe-KB/pdbe-kb-ping-component)
[![Maintainability](https://api.codeclimate.com/v1/badges/cf98b84b88b21a3e6fb5/maintainability)](https://codeclimate.com/github/PDBe-KB/pdbe-kb-coverage-table/maintainability)

This is the repository of a lightweight Angular 7+ web component that displays all the available PDB entries for a particular UniProt accession in a tabular format. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display information on devices that are to small to use the standard sequence feature viewer, ProtVista.

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/pdbe-kb-coverage-table.git
cd pdbe-kb-coverage-table
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

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/pdbe-kb-ping-component/tags).

## Authors

* **Nurul Nadzirin** - *Initial work* - [nurulnad](https://github.com/nurulnad)
* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/pdbe-kb-ping-component/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
