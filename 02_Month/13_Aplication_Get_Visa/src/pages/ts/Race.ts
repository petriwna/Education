export class Race {
  checkAge(data) {
    return data < 18 || data < 60;
  }

  checkDoc(data){
    return data === '3';
  }

  checkLevel(data){
    return data === 'B1' || data === 'B2' || data === 'C1';
  }

  randomInterval(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
  }
}
