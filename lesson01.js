
         let health = prompt('Введите число параметра "здоровье" для персонажа');
    
          if (health <= 0 || !health) {
            console.log('Параметр "здоровье" должен быть больше нуля!');
            alert('Параметр "здоровье" должен быть больше нуля!');
          } else {
            console.log(`Параметр "здоровье" равен ${health}`);
            alert(`Параметр "здоровье" равен ${health}`);
          }
           