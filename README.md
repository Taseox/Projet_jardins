Les outils utilisés sont Visual Studio Code pour l'écriture du code et l'utilisation du terminal de commande et Google Chrome pour l'accès internet et les recherches de ressources.

Pour la création du CV, je me suis tout d'abord décidé sur la template "Carousel" du site Bootstrap car je la trouvais visuellement intéressante et relativement adaptée pour un CV moderne.

J'ai d'abord modifié la partie "marketing" avec les 3 images rondes. Au départ j'ai eu quelques problèmes à inclure les images, mais j'ai finalement enlevé la partie "svg" dans le document html et l'ai remplacé par les images directement. Je perds la forme "ronde" de l'image en procédant de cette manière, mais les images sont complètes au moins.

J'ai ensuite trouvé une liste "minimaliste" sur le site de bootstrap et l'ai incluse en dessous des éléments marketing. Rien de compliqué ici.

J'ai ensuite passé du temps à faire le "header" bien qu'il soit très simple au final. Je me suis d'abord imaginer utiliser une image mais je me suis rendu compte qu'en trouver une au bon format serait difficile, surtout si on doit prendre en compte les différentes tailles d'écran.

J'ai ensuite remarqué que, en mettant le site au format verticale (sur une moitié d'écran par exemple), la partie "présentation" en bleu foncée ne s'affichait pas très bien, car la propriété "height" de l'élément "carousel-item" était trop haut, donc le texte dépassait en haut.

Je me suis ensuite attaqué à la partie "Occupations actuelles". J'ai gardé dans les grandes lignes ce qui était de base avec la template, mais j'ai effectué la même manipulation que mentionnée plus haut pour les images. Le texte pour la HE-ARC et Job Service sont repris de leurs sites respectifs.

J'ai du utiliser une autre image pour le logo de Job Service, car celles que je trouvais étaient soient de trop mauvaise qualité, soit rectangulaire. Ceci ne devrait pas être un problème mais je n'arrivais pas à aligner l'image rectangulaire avec le paragraphe à coté. J'ai essayé de modifier la taille de l'image (width autant que height, etc.) et le type d'aspect ratio, mais sans résultat satisfaisant.

J'ai ensuite réfléchi à quoi mettre de plus dans le CV et je n'ai rien trouvé de très inspirant (hobbies? études passées?), je suis donc parti dans un style un peu plus libre pour mieux utiliser bootstrap et html en général, d'où le carré "PLEASE HIRE ME", les commentaires meta et le lien vers Reddit.

Lors de la présentation teams de mardi, j'ai essayé directement l'affichage mobile lorsqu'on en a parlé et j'ai remarqué que la majorité de la page s'affichait mal (du texte caché derrière les marges par exemple). Afin de régler ce problème, j'ai petit à petit supprimé les éléments non-essentiels qui venaient de la template (l'élément carousel-active, par exemple). Voyant que ça n'aidait pas, j'ai finalement juste copié l'élément du dessus (un élément card).

