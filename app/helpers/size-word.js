import { helper } from '@ember/component/helper';

export function sizeWord([size]/*, hash*/) {
  switch(size) {
    case 'XS':
      return 'Extra Small';
    case 'SM':
      return 'Small';
    case 'MD':
      return 'Medium';
    case 'LG':
      return 'Large';
    case 'XL':
      return 'Extra Large';
    default:
      return 'Unknown';
  }
}

export default helper(sizeWord);
