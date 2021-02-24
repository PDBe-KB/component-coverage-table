import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor() {
    this.data = {
      'largeLabels': true,
      'sequence': 'MEDTQAIDWDVEEEEETEQSSESLRCNVEPVGRLHIFSGAHGPEKDFPLHLGKNVVGRMPDCSVALPFPSISKQHAEIEILAWDKAPILRDCGSLNGTQILRPPKVLSPGVSHRLRDQELILFADLLCQYHRLDVSLPFVSRGPLTVEETPRVQGETQPQRLLLAEDSEEEVDFLSERRMVKKSRTTSSSVIVPESDEEGHSPVLGGLGPPFAFNLNSDTDVEEGQQPATEEASSAARRGATVEAKQSEAEVVTEIQLEKDQPLVKERDNDTKVKRGAGNGVVPAGVILERSQPPGEDSDTDVDDDSRPPGRPAEVHLERAQPFGFIDSDTDAEEERIPATPVVIPMKKRKIFHGVGTRGPGAPGLAHLQESQAGSDTDVEEGKAPQAVPLEKSQASMVINSDTDDEEEVSAALTLAHLKESQPAIWNRDAEEDMPQRVVLLQRSQTTTERDSDTDVEEEELPVENREAVLKDHTKIRALVRAHSEKDQPPFGDSDDSVEADKSSPGIHLERSQASTTVDINTQVEKEVPPGSAIIHIKKHQVSVEGTNQTDVKAVGGPAKLLVVSLEEAWPLHGDCETDAEEGTSLTASVVADVRKSQLPAEGDAGAEWAAAVLKQERAHEVGAQGGPPVAQVEQDLPISRENLTDLVVDTDTLGESTQPQREGAQVPTGREREQHVGGTKDSEDNYGDSEDLDLQATQCFLENQGLEAVQSMEDEPTQAFMLTPPQELGPSHCSFQTTGTLDEPWEVLATQPFCLRESEDSETQPFDTHLEAYGPCLSPPRAIPGDQHPESPVHTEPMGIQGRGRQTVDKVMGIPKETAERVGPERGPLERETEKLLPERQTDVTGEEELTKGKQDREQKQLLARDTQRQESDKNGESASPERDRESLKVEIETSEEIQEKQVQKQTLPSKAFEREVERPVANRECDPAELEEKVPKVILERDTQRGEPEGGSQDQKGQASSPTPEPGVGAGDLPGPTSAPVPSGSQSGGRGSPVSPRRHQKGLLNCKMPPAEKASRIRAAEKVSRGDQESPDACLPPTVPEAPAPPQKPLNSQSQKHLAPPPLLSPLLPSIKPTVRKTRQDGSQEAPEAPLSSELEPFHPKPKIRTRKSSRMTPFPATSAAPEPHPSTSTAQPVTPKPTSQATRSRTNRSSVKTPEPVVPTAPELQPSTSTDQPVTSEPTSQVTRGRKSRSSVKTPETVVPTALELQPSTSTDRPVTSEPTSQATRGRKNRSSVKTPEPVVPTAPELQPSTSTDQPVTSEPTYQATRGRKNRSSVKTPEPVVPTAPELRPSTSTDRPVTPKPTSRTTRSRTNMSSVKTPETVVPTAPELQISTSTDQPVTPKPTSRTTRSRTNMSSVKNPESTVPIAPELPPSTSTEQPVTPEPTSRATRGRKNRSSGKTPETLVPTAPKLEPSTSTDQPVTPEPTSQATRGRTNRSSVKTPETVVPTAPELQPSTSTDQPVTPEPTSQATRGRTDRSSVKTPETVVPTAPELQASASTDQPVTSEPTSRTTRGRKNRSSVKTPETVVPAAPELQPSTSTDQPVTPEPTSRATRGRTNRSSVKTPESIVPIAPELQPSTSRNQLVTPEPTSRATRCRTNRSSVKTPEPVVPTAPEPHPTTSTDQPVTPKLTSRATRRKTNRSSVKTPKPVEPAASDLEPFTPTDQSVTPEAIAQGGQSKTLRSSTVRAMPVPTTPEFQSPVTTDQPISPEPITQPSCIKRQRAAGNPGSLAAPIDHKPCSAPLEPKSQASRNQRWGAVRAAESLTAIPEPASPQLLETPIHASQIQKVEPAGRSRFTPELQPKASQSRKRSLATMDSPPHQKQPQRGEVSQKTVIIKEEEEDTAEKPGKEEDVVTPKPGKRKRDQAEEEPNRIPSRSLRRTKLNQESTAPKVLFTGVVDARGERAVLALGGSLAGSAAEASHLVTDRIRRTVKFLCALGRGIPILSLDWLHQSRKAGFFLPPDEYVVTDPEQEKNFGFSLQDALSRARERRLLEGYEIYVTPGVQPPPPQMGEIISCCGGTYLPSMPRSYKPQRVVITCPQDFPHCSIPLRVGLPLLSPEFLLTGVLKQEAKPEAFVLSPLEMSST',
      'length': 2089,
      'tracks': [
        {
          'labelType': 'text',
          'label': 'PDB Structures (10)',
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
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry is a not complex',
                    'url': 'https://pdbe.org/2etx'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/citations'
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
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1884-SER1890<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/protein/1">2etx Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 1891,
                      'end': 2085,
                      'start_code': 'THR',
                      'end_code': 'GLU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1891-GLU2085<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/protein/1">2etx Best Chain B</a>'
                    },
                    {
                      'start': 2086,
                      'end': 2089,
                      'start_code': 'MET',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2086-THR2089<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2etx/protein/1">2etx Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure of MDC1 Tandem BRCT Domains',
              'observed_residue_count': 195
            },
            {
              'accession': '2ado',
              'labelType': 'pdbIcons',
              'label': {
                'id': '2ado',
                'url': 'https://pdbe.org/2ado',
                'resolution': 1.45,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry is a not complex',
                    'url': 'https://pdbe.org/2ado'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 1891,
                      'end': 2085,
                      'start_code': 'THR',
                      'end_code': 'GLU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1891-GLU2085<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/protein/1">2ado Best Chain B</a>'
                    },
                    {
                      'start': 2086,
                      'end': 2086,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2086-MET2086<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2ado/protein/1">2ado Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure Of The Brct Repeat Region From The Mediator of DNA damage checkpoint protein 1, MDC1',
              'observed_residue_count': 195
            },
            {
              'accession': '3k05',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3k05',
                'url': 'https://pdbe.org/3k05',
                'resolution': 1.33,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry is a complex',
                    'url': 'https://pdbe.org/3k05'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has 1 ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 1891,
                      'end': 2089,
                      'start_code': 'THR',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1891-THR2089<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/protein/1">3k05 Best Chain B</a>'
                    },
                    {
                      'start': 2067,
                      'end': 2067,
                      'start_code': 'THR',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR2067-THR2067<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3k05/protein/1">3k05 Best Chain B</a><br>Conflict: THR --> ASP (Engineered mutation)',
                      'color': 'rgb(255,121,0)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'The crystal structure of MDC1 BRCT T2067D in complex with a minimal recognition tetrapeptide with an amidated C-terminus',
              'observed_residue_count': 199
            },
            {
              'accession': '3unn',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3unn',
                'url': 'https://pdbe.org/3unn',
                'resolution': 1.7,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry is a complex',
                    'url': 'https://pdbe.org/3unn'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 1,
                      'end': 8,
                      'start_code': 'MET',
                      'end_code': 'ASP',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET1-ASP8<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/protein/2">3unn Best Chain B</a>'
                    },
                    {
                      'start': 4,
                      'end': 4,
                      'start_code': 'THR',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR4-THR4<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/protein/2">3unn Best Chain B</a><br>Modified residue: TPO',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 27,
                      'end': 133,
                      'start_code': 'ASN',
                      'end_code': 'LEU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASN27-LEU133<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/protein/1">3unn Best Chain A</a>'
                    },
                    {
                      'start': 134,
                      'end': 138,
                      'start_code': 'ASP',
                      'end_code': 'PRO',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASP134-PRO138<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unn/protein/1">3unn Best Chain A</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Monomeric structure of the human MDC1 FHA domain in complex with an MDC1 phospho-T4 peptide',
              'observed_residue_count': 115
            },
            {
              'accession': '3umz',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3umz',
                'url': 'https://pdbe.org/3umz',
                'resolution': 1.65,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry is a not complex',
                    'url': 'https://pdbe.org/3umz'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 27,
                      'end': 28,
                      'start_code': 'ASN',
                      'end_code': 'VAL',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASN27-VAL28<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/protein/1">3umz Best Chain A</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 29,
                      'end': 133,
                      'start_code': 'GLU',
                      'end_code': 'LEU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLU29-LEU133<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/protein/1">3umz Best Chain A</a>'
                    },
                    {
                      'start': 134,
                      'end': 138,
                      'start_code': 'ASP',
                      'end_code': 'PRO',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASP134-PRO138<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3umz/protein/1">3umz Best Chain A</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure of the human MDC1 FHA Domain',
              'observed_residue_count': 105
            },
            {
              'accession': '3unm',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3unm',
                'url': 'https://pdbe.org/3unm',
                'resolution': 1.8,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry is a not complex',
                    'url': 'https://pdbe.org/3unm'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 27,
                      'end': 28,
                      'start_code': 'ASN',
                      'end_code': 'VAL',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASN27-VAL28<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/protein/1">3unm Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 29,
                      'end': 134,
                      'start_code': 'GLU',
                      'end_code': 'ASP',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLU29-ASP134<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/protein/1">3unm Best Chain B</a>'
                    },
                    {
                      'start': 135,
                      'end': 138,
                      'start_code': 'VAL',
                      'end_code': 'PRO',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: VAL135-PRO138<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3unm/protein/1">3unm Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure of The Human MDC1 FHA Domain',
              'observed_residue_count': 106
            },
            {
              'accession': '3uot',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3uot',
                'url': 'https://pdbe.org/3uot',
                'resolution': 1.8,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry is a complex',
                    'url': 'https://pdbe.org/3uot'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 1,
                      'end': 1,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET1-MET1<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/2">3uot Best Chain C</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 2,
                      'end': 9,
                      'start_code': 'GLU',
                      'end_code': 'TRP',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLU2-TRP9<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/2">3uot Best Chain C</a>'
                    },
                    {
                      'start': 4,
                      'end': 4,
                      'start_code': 'THR',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR4-THR4<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/2">3uot Best Chain C</a><br>Modified residue: TPO',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 6,
                      'end': 6,
                      'start_code': 'ALA',
                      'end_code': 'ALA',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ALA6-ALA6<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/2">3uot Best Chain C</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 10,
                      'end': 10,
                      'start_code': 'ASP',
                      'end_code': 'ASP',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ASP10-ASP10<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/2">3uot Best Chain C</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 19,
                      'end': 135,
                      'start_code': 'GLN',
                      'end_code': 'VAL',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLN19-VAL135<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/1">3uot Best Chain A</a>'
                    },
                    {
                      'start': 59,
                      'end': 59,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET59-MET59<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/1">3uot Best Chain A</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 136,
                      'end': 138,
                      'start_code': 'SER',
                      'end_code': 'PRO',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: SER136-PRO138<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3uot/protein/1">3uot Best Chain A</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure of MDC1 FHA Domain in Complex with a Phosphorylated Peptide from the MDC1 N-terminus',
              'observed_residue_count': 125
            },
            {
              'accession': '3ueo',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3ueo',
                'url': 'https://pdbe.org/3ueo',
                'resolution': 2.6,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry is a complex',
                    'url': 'https://pdbe.org/3ueo'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 325,
                      'end': 325,
                      'start_code': 'GLY',
                      'end_code': 'GLY',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLY325-GLY325<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/protein/2">3ueo Best Chain E</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 326,
                      'end': 335,
                      'start_code': 'PHE',
                      'end_code': 'GLU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: PHE326-GLU335<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/protein/2">3ueo Best Chain E</a>'
                    },
                    {
                      'start': 329,
                      'end': 329,
                      'start_code': 'SER',
                      'end_code': 'SER',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: SER329-SER329<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/protein/2">3ueo Best Chain E</a><br>Modified residue: SEP',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 331,
                      'end': 331,
                      'start_code': 'THR',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR331-THR331<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/protein/2">3ueo Best Chain E</a><br>Modified residue: TPO',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 336,
                      'end': 336,
                      'start_code': 'GLU',
                      'end_code': 'GLU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: GLU336-GLU336<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3ueo/protein/2">3ueo Best Chain E</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal structure of TopBP1 BRCT4/5 domains in complex with a phospho-peptide',
              'observed_residue_count': 10
            },
            {
              'accession': '3un0',
              'labelType': 'pdbIcons',
              'label': {
                'id': '3un0',
                'url': 'https://pdbe.org/3un0',
                'resolution': 2.3,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry is a not complex',
                    'url': 'https://pdbe.org/3un0'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has 1 ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 26,
                      'end': 134,
                      'start_code': 'CYS',
                      'end_code': 'ASP',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: CYS26-ASP134<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/protein/1">3un0 Best Chain B</a>'
                    },
                    {
                      'start': 135,
                      'end': 138,
                      'start_code': 'VAL',
                      'end_code': 'PRO',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: VAL135-PRO138<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/3un0/protein/1">3un0 Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal Structure of MDC1 FHA Domain',
              'observed_residue_count': 109
            },
            {
              'accession': '2azm',
              'labelType': 'pdbIcons',
              'label': {
                'id': '2azm',
                'url': 'https://pdbe.org/2azm',
                'resolution': 2.41,
                'icons': [
                  {
                    'type': 'experiments',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry has X-ray diffraction data',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/experiment'
                  },
                  {
                    'type': 'complex',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'This entry is a complex',
                    'url': 'https://pdbe.org/2azm'
                  },
                  {
                    'type': 'nucleicAcids',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no RNA/DNA',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/analysis'
                  },
                  {
                    'type': 'ligands',
                    'background': 'rgb(211,211,211)',
                    'tooltipContent': 'This entry has no ligand(s)',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/ligands/'
                  },
                  {
                    'type': 'literature',
                    'background': 'rgb(116,179,96)',
                    'tooltipContent': 'Go to literature',
                    'url': 'http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/citations'
                  }
                ]
              },
              'color': '#4169e1',
              'locations': [
                {
                  'fragments': [
                    {
                      'start': 1883,
                      'end': 1890,
                      'start_code': 'ARG',
                      'end_code': 'SER',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: ARG1883-SER1890<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 1891,
                      'end': 2085,
                      'start_code': 'THR',
                      'end_code': 'GLU',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: THR1891-GLU2085<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a>'
                    },
                    {
                      'start': 2014,
                      'end': 2014,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2014-MET2014<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 2014,
                      'end': 2014,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2014-MET2014<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 2029,
                      'end': 2029,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2029-MET2029<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 2029,
                      'end': 2029,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2029-MET2029<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 2086,
                      'end': 2089,
                      'start_code': 'MET',
                      'end_code': 'THR',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2086-THR2089<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a>',
                      'color': 'rgb(211, 211, 211)'
                    },
                    {
                      'start': 2086,
                      'end': 2086,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2086-MET2086<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    },
                    {
                      'start': 2086,
                      'end': 2086,
                      'start_code': 'MET',
                      'end_code': 'MET',
                      'tooltipContent': 'Type: PDB mapped to UniProt<br>Range: MET2086-MET2086<br>PDB entry: <a target="_blank"href="http://www.ebi.ac.uk/pdbe/entry/pdb/2azm/protein/1">2azm Best Chain B</a><br>Modified residue: MSE',
                      'color': 'rgb(255,121,0)'
                    }
                  ]
                }
              ],
              'type': 'UniProt range',
              'labelTooltip': 'Crystal structure of the MDC1 brct repeat in complex with the histone tail of gamma-H2AX',
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
            },
            {
              'color': 'rgb(211, 211, 211)',
              'text': 'Unobserved'
            },
            {
              'color': 'rgb(255,121,0)',
              'text': 'Conflict'
            }
          ]
        }
      }
    };
  }
}
