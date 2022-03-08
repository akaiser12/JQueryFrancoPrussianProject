$(document).ready(function () {
    
    $whoAmIPic = $("#whoAmI");
    
    $mysteryPanel = $("#mysteryPanel");
    
    $whoAmIText = $("#whoAmIText");
    
    $silhouette = $("#silhouette");
    
    $whoAmIH3 = $("#mysteryPanel>h3");
    
    $revealedPic = $("#revealed");
    
    $whoAmIPic.hover(function () {
        
        $(this).stop().fadeTo("normal", 1);
        $whoAmIText.stop().fadeTo("normal", 1);
        
    }, function() {
        
        $(this).stop().fadeTo("normal", .4);
        $whoAmIText.stop().fadeTo("normal", .4);
        
    });
    
    $whoAmIPic.click(function() {
       
        $mysteryPanel.toggle();
        
    });
    
    $whoAmIH3.click(function() {
        
        $silhouette.fadeOut(5000);
        
        $revealedPic.delay(3000).fadeIn(1000, function() {
            
            $whoAmIH3.text("Marechal Patrice MacMahon").css({cursor: "default"});
            
        });
        
    });
    
});