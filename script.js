//your JS code here. If required.
let changeBtn = document.getElementById("change_button");
let resetBtn = document.getElementById("reset");

 function resetColors() {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = 'transparent';
      }
    }

    changeBtn.addEventListener('click', () => {
      let blockId = document.getElementById('block_id').value;
      let color = document.getElementById('colour_id').value;

      if (blockId < 1 || blockId > 9 || !document.getElementById(blockId)) {
        alert('Please enter a valid block ID between 1 and 9.');
        return;
      }
    
      resetColors();
      
      document.getElementById(blockId).style.backgroundColor = color;
    });

    resetBtn.addEventListener('click', resetColors);