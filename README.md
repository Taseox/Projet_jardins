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

J'ai ensuite attaqué la partie avec la guitare, en prenant la template suivante : https://startbootstrap.com/snippets/portfolio-item/. Je n'ai eu qu'à modifier l'image et le texte. J'ai également testé l'insertion d'un emoji.

J'ai ajouté ensuite les cartes LinkedIn, Youtube et Facebook. Rien de bien compliqué ici, l'important était d'utiliser l'élément container et de diviser le tout avec 3 colonnes. 

J'ai ensuite retravaillé le haut de la page. Comme demandé dans la consigne, j'ai cherché une librairie javascript à inclure dans le CV. Je cherchais quelque chose de visuel, et j'ai trouvé la librairie "choreographer". Grâce à celle-ci, il est possible d'animer la page selon le mouvement de la souris ou du scroll de la page. En reprenant un exemple ((https://codepen.io/bransbury/pen/rrzdrQ) et en le modifiant légèrement (en enlevant scale height et en changeant la couleur de base), je suis parvenu au résultat final.

J'ai ensuite travaillé l'image de cheem (le chien). J'ai d'abord du la trouver en png pour la transparence, et après l'avoir inseré en statique je me suis dit que de l'animer serait plus dynamique. J'en ai donc fait un gif avec le site (https://ezgif.com/maker), après avoir cloné l'image et l'avoir retourné verticalement avec paint. Malgré ça, je n'étais pas complètement satisfait et j'ai cherché un moyen de l'animer encore plus. Après quelques recherches sur internet, j'ai trouvé plusieurs exemples en css pour l'animation. Après quelques tests très ludiques, je suis resté sur la version finale qui attire bien l'oeil sans être trop chiante.

J'ai changé ensuite le favicon (simple changement de fichier dans le dossier public) et le titre (dans la partie title du fichier HTML).

Est venue ensuite la partie des charts. Je suis d'abord partie sur des charts qui n'étaient pas en lien avec les progress bar insérées précédemment, et j'ai donc du recommencer. En travaillant en collaboration avec certains de mes camarades, je suis arrivé à cette version des méthodes "replaceProgressBars" et "createCharts" qui prend en charge plusieurs couleurs, grâce à une série de if / else if. C'est ainsi qu'est venue la partie "statistiques" tout en bas de page. Je ne savais pas quel couleur choisir pour ce texte, mais la version "muted" me paraissait assez universelle avec le rouge/bleu/vert qui l'entourait.

Les charts n'étaient pas finis cependant. J'ai fait plusieurs essais avec les couleurs (notamment d'avoir le background en white et uniquement la bordure en couleur, mais le résultat n'affichait pas assez bien.) avant d'en arriver au résultat actuel. Il fallait également changer les labels pour qu'ils n'affichent pas "undefined". Malheureusement, la façon dont sont créées ces charts fait qu'il n'est pas possible de leur donner des labels différents. La manière la plus adéquate de gérer celà, selon moi, est de n'afficher que la valeur de la chart sur laquelle on passe la souris sans aucun texte. (Donc la valeur de aria-value-now).

Le dernier changement a été de déplacer les liens vers mes pages personnelles (youtube, etc.) tout en bas, car il est plus logique et visuellement agréable d'avoir les liens vers d'autres pages tout en bas, de plus, la forme carrée de ces éléments complètemente la forme du navigateur.