import type { Nodes } from 'lakelib';

type KeyValue = { [key: string]: string };

type ActiveItem = {
  node: Nodes;
  name: string;
  attributes: KeyValue;
  styles: KeyValue;
};

type SelectionState = {
  activeItems: ActiveItem[];
  disabledNameMap?: Map<string, boolean>;
  selectedNameMap?: Map<string, boolean>;
  selectedValuesMap?: Map<string, string[]>;
}
