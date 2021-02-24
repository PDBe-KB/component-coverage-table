export class UniPDBData {
  tracks: UniPDBTrack[];
}

class UniPDBTrack {
  data: UniPDBDataItem[];
}

class UniPDBDataItem {
  accession: string;
  label: UniPDBDataItemLabel[];
  location: UniPDBDataItemLocation[];
}

class UniPDBDataItemLabel {
  resolution: string;
  icons: UniPDBDataItemLabelIcon[];
}

class UniPDBDataItemLabelIcon {
  url: string;
  type: string;
  background: string;
}

class UniPDBDataItemLocation {
  fragments: UniPDBDataItemLocationFragment[];
}

class UniPDBDataItemLocationFragment {
  start: string;
  end: string;
}
