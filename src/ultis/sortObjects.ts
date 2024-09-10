
export const sortObjects = (teachers: any[], isAscending: boolean): any[] => {
    return teachers.sort((a, b) => {
      if(a.name) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return isAscending ? -1 : 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return isAscending ? 1 : -1;
      } else {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return isAscending ? -1 : 1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return isAscending ? 1 : -1;
      }
      return 0;
    });
};