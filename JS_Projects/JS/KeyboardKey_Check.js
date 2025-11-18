// Selecting A Element.
let insert_div = document.querySelector('.insert');
window.addEventListener('keydown',function(event){
  insert_div.innerHTML = `
   <div class="color">
   <table>
    <tr>
     <th>Key</th>
     <th>KeyCode</th>
     <th>Code</th>
    </tr>
    <tr>
     <td>${event.key === " " ? "space " : event.key}</td>
     <td>${event.keyCode}</td>
     <td>${event.code}</td>
    </tr>
   </table>
 </div>`;
})