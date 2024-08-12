import { IEmployee } from '../../../types/employee';

export interface FragmentProps {
  item: IEmployee;
  goToEmployeeDetail: () => void;
}
