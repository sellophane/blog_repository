<li class='li-first'><a href='#'>Przepisy</a>
  <ul class='children'>
    <li>
      <a href='/search/label/owsianka'>Owsianki</a>
      <ul>
        <li>
          <a href='/search/label/owsianka'>Pomysł na owsiankę</a>
        </li>
        <li>
          <a href='/p/blog-page_1.html'>Jak ugotować swoją pierwszą owsiankę</a>
        </li>
        <li>
          <a href='/p/blog-page_5.html'>Owsianka 'Ulepek'</a> 
          <ul class='children'> 
              <li> 
                 <a href='/search/label/Pomysł%20na%20owsiany%20ulepek'>Pomysł na owsiany ulepek</a></li></ul>
       </li>
      </ul>
    </li>
    <li><a href='/search/label/Na%20słodko'>Na słodko</a>
    </li>
    <li><a href='/search/label/Na%20wytrawnie'>Na wytrawnie</a>
    </li>
    <li><a href='/search/label/Ciasta%20i%20ciasteczka'>Ciasta i ciasteczka</a>
    </li>
  </ul>
</li>
<li class='li-first'><a href='search/label/Książki'>Książki</a>
  <ul class='children'>
    <li><a href='/search/label/Fantastyka'>Fantastyka</a></li>
    <li><a href='/search/label/Dla%20kobiet'>Dla kobiet</a></li>
    <li><a href='/search/label/O%20jedzeniu'>O jedzeniu</a></li>
    <li><a href='/search/label/Inne'>Inne</a></li>
  </ul>
</li>
<li class='li-first'><a href='/p/o-podziomniku.html'>O Autorce</a></li>
<li class='li-first'><a href='/search/label/Projekt%20%27Książki%20Szczęśliwe%27'>Projekt 'Książki Szczęśliwe'</a></li>
<li class='li-first'><a href='/search/label/Wydarzenia'>Wydarzenia</a></li>
<li class='li-first'><a href='/search/label/Miejsca'>Miejsca</a>
  <ul class='children'>
    <li><a href='/search/label/Restauracje'>Restauracje</a></li>
    <li><a href='/search/label/Kawiarnie'>Kawiarnie</a></li>
  </ul>
</li>
<script>
_.each(jQuery('.menu-secondary li a'), function (item) { 
var href = item.attributes.href.value;
if (href !='#') {
item.attributes.href.value = href + '?updated-max=2014&max-results=5';
}
});
</script>