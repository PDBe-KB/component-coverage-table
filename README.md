PDBe-KB Coverage Table Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-coverage-table.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-coverage-table)
[![codecov](https://codecov.io/gh/PDBe-KB/component-coverage-table/branch/main/graph/badge.svg?token=QA6OCNOB1E)](https://codecov.io/gh/PDBe-KB/component-coverage-table)
[![Maintainability](https://api.codeclimate.com/v1/badges/4de133cf4cdd7ce170eb/maintainability)](https://codeclimate.com/github/PDBe-KB/component-coverage-table/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that displays all the available PDB entries for a particular UniProt accession in a tabular format. 

This component is used on the PDBe-KB Aggregated Views of Proteins to display information on devices that are to small to use the standard sequence feature viewer, ProtVista.

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-coverage-table/main/pdbe-kb-coverage-table.jpg">

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

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
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

#### 2.) Add the component to a template:
```angular2html
<app-coverage-table [data]="data"></app-coverage-table>
```

The data model for the input data is described in 
`src/app/coverage-table/coverage-table.models.ts`

##### Example input data

```angular2html
{
  'largeLabels': true,
  'sequence': 'MEDTQAIDWDVEEEEETEQSSESLRCNVEPVGRLHIFS',
  'length': 28,
  'tracks': [
    {
      'labelType': 'text',
      'label': 'PDB Structures (1)',
      'data': [
        {
          'accession': '2etx',
          'labelType': 'pdbIcons',
          'label': {
            'id': '2etx',
            'url': 'https://pdbe.org/2etx',
            'resolution': 1.33,
            'icons': [
              {
                'type': 'experiments',
                'background': 'rgb(116,179,96)',
                'tooltipContent': 'This entry has X-ray diffraction data',
                'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/experiment'
              }
            ]
          },
          'color': '#4169e1',
          'locations': [
            {
              'fragments': [
                {
                  'start': 1884,
                  'end': 1890,
                  'start_code': 'THR',
                  'end_code': 'SER',
                  'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1884-SER1890<br>PDB entry: ' +
                    '<a target="_blank" href="http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/protein/1">2etx Best Chain B</a>',
                  'color': 'rgb(211, 211, 211)'
                }
              ]
            }
          ],
          'type': 'UniProt range',
          'labelTooltip': 'Crystal Structure of MDC1 Tandem BRCT Domains',
          'observed_residue_count': 195
        }
      ]
    }
  ],
  'legends': {
    'alignment': 'right',
    'data': {
      'Other': [
        {
          'color': 'rgb(65, 105, 225)',
          'text': 'Observed'
        }
      ]
    }
  }
};
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-coverage-table/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-coverage-table/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
