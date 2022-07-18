let obras = [
    {

    },
    {

    },
    {

    },
    {
        autor_foto: 'images/autor4.jpg',
        autor_texto: 'Nasceu na Noruega, em Oslo, no final do século XIX, e é considerado o precursor do expressionismo alemão, um movimento de contraponto às normas burguesas, que propunha um novo padrão estético, no qual a realidade se apresentava de uma forma trágica e crítica em relação à ordem social dominante por meio da representação de imagens distorcidas, deformadas carregadas de sentimentos de angústia, tristeza e medo. Uma de suas obras “O grito” é considerada como a maior representação do expressionismo. Munch perdeu a mãe e uma irmã, ainda jovem, em seguida, sua outra irmã foi diagnosticada com problemas mentais, seu avô foi diagnosticado com sífilis, e o próprio Munch foi uma criança enfermiça e chegou a procurar tratamento psiquiátrico quando adulto, por apresentar um quadro de perturbação e conflitos, além de diagnóstico de ansiedade, depressão e transtorno bipolar (AZEEM, 2015).',
        obra_foto: 'images/obra4.jpg',
        obra_texto: 'Vamos conhecer um quadro “que foi exposto no “Salão dos independentes”, em Paris no ano de 1903, intitulado inicialmente como “Mãe” e, depois, renomeado como “Herança”. Nessa obra Munch retrata uma mãe sifilítica e seu filho enfermo com sífilis congênita. A cena, desesperadora e triste, nos remete a um aspecto importante, que é a forma distinta como Munch retrata mãe e filho, e a exposição dos sinais clínicos, resultado de um provável estudo de Munch acerca da sífilis congênita, durante visita ao Hôpital Saint-Louis na cidade de Paris, onde conheceu uma coleção em cera usada para o estudo de anatomia, incluindo uma peça de um recém-nascido com sífilis congênita, e na mesma ocasião, viu uma cena real, na qual uma mãe chorava ao lado de seu filho com sífilis (PERCIACCANTE; CORALLI, 2018). O quadro sofreu várias críticas, principalmente pelo fato de retratar uma infecção sexualmente transmissível, tabu na época. O quadro foi pintado, em torno de 1887 a 1889, e foi exposto em 1903.'
    }
]

$('.img_btn').click(function () {
    var i = $(this).data('index');
    var obra = obras[i];
    console.log($('#autorCollapse .card-body'));
    $('#autorCollapse .card-body').html(
        "<img class='img_autor img-fluid w-50' src='" + obra.autor_foto + "'><p>" +
        obra.autor_texto + '</p>'
    );
    $('#obraCollapse .card-body').html(
        "<p>" + obra.obra_texto + '</p>'
    );
})

$('.botoes').on('show.bs.collapse','.collapse', function() {
    $('.collapse').collapse('hide');
});