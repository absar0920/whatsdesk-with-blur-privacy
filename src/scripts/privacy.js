// Privacy CSS injection with toggle functionality
(function() {
    let styleElement = null;
    let isEnabled = false;

    // Function to create and inject the style
    function createStyle() {
        if (styleElement) return;
        
        styleElement = document.createElement('style');
        styleElement.id = 'whatsdesk-privacy-style';
        styleElement.textContent = `
            /* Privacy CSS for WhatsApp Web */
            
            /* Blur contact names in the chat list */
            span[title] {
                filter: blur(4px);
                transition: filter 0.2s ease;
            }
            
            span[title]:hover {
                filter: blur(0);
            }
            
            /* Blur message content */
            .message-in, .message-out {
                filter: blur(4px);
                transition: filter 0.2s ease;
            }
            
            .message-in:hover, .message-out:hover {
                filter: blur(0);
            }
            
            /* Blur status messages */
            .status-message {
                filter: blur(4px);
                transition: filter 0.2s ease;
            }
            
            .status-message:hover {
                filter: blur(0);
            }
            
            /* Blur group names */
            span[title*="group"] {
                filter: blur(4px);
                transition: filter 0.2s ease;
            }
            
            span[title*="group"]:hover {
                filter: blur(0);
            }
            
            /* Blur profile names in chat header */
            span[title]._3WByx {
                filter: blur(4px);
                transition: filter 0.2s ease;
            }
            
            span[title]._3WByx:hover {
                filter: blur(0);
            }

            /* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
.tukmaf4q /*media preview in gallery*/,
._1Pr6q /*media preview in send media*/,

/* updated wa version (v2.3000.xx) */
div._ajuf._ajuh._ajug > div /* media in overlay view */,
div.x1conndi /* media thumb in overlay view and details panel */,
div.x4t2iug /* media thumb in media gallery panel */
{
  filter: blur(var(--mdg-blur)) grayscale(1);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
.tukmaf4q:hover /*media preview in gallery*/,
._1Pr6q:hover /*media preview in send media*/,

/* updated wa version (v2.3000.xx) */
div._ajuf._ajuh._ajug > div:hover /* media in overlay view */,
div.x1conndi:hover /* media thumb in overlay view and details panel */,
div.x4t2iug:hover /* media thumb in media gallery panel */
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}

/* updated wa version (v2.3000.xx) */
/* prevent cropped blur */
div[role="dialog"] > .x10wlt62 /* media thumb in details panel */
{
  overflow: visible;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
._2AOIt div.ktbp76dp div[role="button"] img /*image landscape*/,
._2AOIt div.eu4mztcy div[role="button"] img /*image potrait*/,
._2AOIt div.ktbp76dp > div[role="button"] /*video landscape*/,
._2AOIt div.eu4mztcy > div[role="button"] /*video potrait*/,
._2AOIt .cm280p3y > div[role="button"] > div.g0rxnol2.fe3aadhc.g0rxnol2.ln8gz9je /*document image*/,
._2AOIt .cm280p3y > div[role="button"] > div > div > div:not(:last-child) /*document*/,
._2AOIt .M6sU5 /*link*/,
._1BOF7 ._3cupO > div:not(.LldYr) /*link list*/,
._3V9pc /* gif */,
.kknmh /*media reply thumb*/,
._2MmTH /*media send preview*/,
.ZRhsD._2foMf /*Sticker*/,
.Efdtr /* name in contact attachment */,
.djhxrpsl /* name in multi contact attachment */,
._3dPH0 /* contacts attachment */,
.b021xdil /* multi contacts attachment */,

/* updated wa version (v2.3000.xx) */
div._amk4 > ._amk6 :is(div, button)[role="button"][class]:not(.x13yyeie, .x1dxgm4b, .x7fhd9j, ._ak3u, ._aju3, [data-js-context-icon], .x1a06ls3, .x6ikm8r.x10wlt62.xlyipyv) /* media messages in chat panel and contact attachment button */,
div._aju3 ._agtn > div /* media in quoted message */,
div._aju3 .x1ozewix /* icon for filename in quoted message */,
div._aju3 .x1ozewix + span /* filename in quoted message */,
div._aju3 span._ajxd._ajxk /* sticker in quoted message */,
div._ak4o /* voice note / audio in chat panel */,
div._ahy5 > div /* link preview in chat panel */,
div._ak15 > ._ahwq /* some link preview in link list panel */,
span._ajxd._ajxk > ._ajxj._ajxd /* sticker in chat panel */,
div.xz9dduz > div:first-child /* maps / location */,
div._ajwt > div:first-child > div:nth-child(2) > div /* media preview in send media */,
div._ak3i /* media preview thumb in send media */,
div._ajwt .xm0mufa > div /* document filename in send media */
{
  filter: blur(var(--mdp-blur)) grayscale(1);
  transition: initial; /* fix link preview delay */
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
._2AOIt div.ktbp76dp div[role="button"]:hover img /*image landscape*/,
._2AOIt div.eu4mztcy div[role="button"]:hover img /*image potrait*/,
._2AOIt div.ktbp76dp > div[role="button"]:hover /*video landscape*/,
._2AOIt div.eu4mztcy > div[role="button"]:hover /*video potrait*/,
._2AOIt .cm280p3y > div[role="button"] > div.g0rxnol2.fe3aadhc.g0rxnol2.ln8gz9je:hover /*document image*/,
._2AOIt .cm280p3y > div[role="button"] > div > div > div:not(:last-child):hover /*document*/,
._2AOIt .M6sU5:hover /*link*/,
._1BOF7 ._3cupO > div:not(.LldYr):hover /*link list*/,
._3V9pc:hover /* gif */,
.kknmh:hover /*media reply thumb*/,
._2MmTH:hover /*media send preview*/,
.ZRhsD._2foMf:hover /*Sticker*/,
.Efdtr:hover /* name in contact attachment */,
.djhxrpsl:hover /* name in multi contact attachment */,
._3dPH0:hover /* contacts attachment */,
.b021xdil:hover /* multi contacts attachment */,

/* updated wa version (v2.3000.xx) */
div._amk4 > ._amk6:hover :is(div, button)[role="button"][class]:not(.x13yyeie, .x1dxgm4b, .x7fhd9j, ._ak3u, ._aju3, [data-js-context-icon], .x1a06ls3, .x6ikm8r.x10wlt62.xlyipyv) /* media messages in chat panel and contact attachment button */,
div._aju3:hover ._agtn > div /* media in quoted message */,
div._aju3:hover .x1ozewix /* icon for filename in quoted message */,
div._aju3:hover .x1ozewix + span /* filename in quoted message */,
div._aju3:hover span._ajxd._ajxk /* sticker in quoted message */,
div._amk6:hover div._ahz2 /* user profile pic in contact attachment */,
div._amk6:hover div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti /* user profile pic in multiple contact attachment */,
div._amk6:hover div._ahz1 /* user name in contact attachment */,
div._amk6:hover div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62 /* user name in multiple contacts attachment */,
div._ak4o:hover /* voice note / audio in chat panel */,
div._ahy5 > div:hover /* link preview in chat panel */,
div._ak15 > ._ahwq:hover /* some link preview in link list panel */,
span._ajxd._ajxk > ._ajxj._ajxd:hover /* sticker in chat panel */,
div.xz9dduz > div:first-child:hover /* maps / location */,
div._ajwt > div:first-child > div:nth-child(2) > div:hover /* media preview in send media */,
div._ak3i:hover /* media preview thumb in send media */,
div._ajwt .xm0mufa > div:hover /* document filename in send media */
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}


/* former wa version (v2.2412.xx) */
._1qNn2 ._1nCcB /*set pseudo background on sticker*/,

/* updated wa version (v2.3000.xx) */
span._ajxd._ajxk > ._ajxj._ajxd /*set pseudo background on sticker*/
{
  background-color: var(--incoming-background) !important;
  border-radius: 7.5px !important;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13) !important;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
._2AOIt div:first-child /*normal message*/,
._3cupO /*link list message*/,
._1BOF7 ._1sykI /*blue info bar*/,

/* updated wa version (v2.3000.xx) */
div._amk4 > ._amk6 /* normal message text */,
div._amk4 ._am2s /* sticker message */,
span._amk7 /* Tail-out */
{
  filter: blur(var(--ms-blur)) grayscale(1);
  transition-delay: 0s;
}
/* former wa version (v2.2412.xx) */
._2AOIt /*normal message more padding*/
{
  padding-right: 40px !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}
/* former wa version (v2.2412.xx) */
._1qNn2 ._1nCcB /*sticker*/
{
  filter: blur(20px) grayscale(1);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
._2AOIt:hover div:first-child /*normal message*/,
._3cupO:hover /*link list message*/,
._1qNn2 ._1nCcB:hover, /*sticker*/
._1BOF7 ._1sykI:hover /*blue info bar*/,

/* updated wa version (v2.3000.xx) */
div._amk4 > ._amk6:hover /* normal message text */,
div._amk4 ._am2s:hover /* sticker message */,
span._amk7:hover /* Tail-out */
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}

/* former wa version (v2.2412.xx) */
._1qNn2 ._1nCcB /*set pseudo background on sticker*/,

/* updated wa version (v2.3000.xx) */
div._amk4 ._am2s /* set pseudo background on sticker */
{
  background-color: var(--incoming-background) !important;
  border-radius: 7.5px !important;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13) !important;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
.vQ0w7 /*message preview*/,

/* updated wa version (v2.3000.xx) */
div._ak8k /*message preview*/
{
  filter: blur(var(--msp-blur)) grayscale(1);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
.vQ0w7:hover /*message preview*/,

/* updated wa version (v2.3000.xx) */
div._ak8k:hover /*message preview*/
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}
/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
div:not([role]) > div:not([role]) > ._8nE1Y ._21S-L /*user/group name in search message*/,
div[role="row"] > div > ._8nE1Y ._21S-L /*user/group name in message list*/,
div[role="button"] > div > ._8nE1Y ._21S-L /*user/group name in non message list*/,
._3W2ap /*Top user/group name*/,
._2au8k div:nth-child(2) /*Top group user preview*/,
._2HCBh ._1N-sl ._1mDG- /*Details groupname*/,
.q9lllk4z /*Details username */,
.qfejxiq4 .Mk0Bp._30scZ /*Details username business*/,
.njub1g37 span._11JPr /*Starred messages user/group name*/,
.a4ywakfo.qt60bha0 /*About user phone number*/,
._3IzYj /*Message in chat*/,
.Efdtr /* name in contact attachment */,
.djhxrpsl /* name in multi contact attachment */,

/* updated wa version (v2.3000.xx) */
div[role="listitem"] ._ak8q /* user/group name in message list */,
div[role="button"][class=""] ._ak8q /* user/group name in details list and popup list */,
div[role="dialog"] ._ak8q /* user name in contact popup list */,
div[role="dialog"] div.copyable-text /* phone number and business user name in contact popup list */,
div[role="listitem"] ._am_2 /* community name */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(1) /* user/group name at the top of chat panel */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(2) /* user/group details at the top of chat panel */,
div._ahxj /* user name in group chat messages */,
div._ahz1 /* user name in contact attachment */,
div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62 /* user name in multiple contacts attachment */,
div.overlay ._ak8q /* user name in overlay media view */,
h2.xngnso2.x1fcty0u.x2b8uid /* user name in details info*/,
div.x2b8uid.x193iq5w.xqmxbcd /* group name in details info */,
div.x1evy7pa.x1gslohp /* user phone number in details info*/,
span.x1lkfr7t.xdbd6k5.x1fcty0u.xw2npq5:nth-child(2) /* user phone number in details info*/,
div.x1evy7pa.x1kgmq87.x2b8uid /* group short details in details info */,
div.xlm9qay.x1s688f.x1e56ztr /* business user name in details info */,
div.xlm9qay.x1s688f.x1e56ztr + div /* business short details in details info */,
div.x2b8uid > .xzueoph + div /* business category in details info */,
div.xkhd6sd:not([role]) > ._ajxu > div /* business about in details info */,
div.xkhd6sd._ajxt > ._ajxu > div /* business phone number details in details info */,
div._ak1d > div:first-child > div:first-child > :not(:first-child) /* user/group name in starred message list */
{
  filter: blur(var(--nm-blur)) grayscale(1);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
div:not([role]) > div:not([role]) > ._8nE1Y ._21S-L:hover /*user/group name in search message*/,
div[role="row"] > div > ._8nE1Y ._21S-L:hover /*user/group name in message list*/,
div[role="button"] > div > ._8nE1Y ._21S-L:hover /*user/group name in non message list*/,
._3W2ap:hover /*Top user/group name*/,
._2au8k div:nth-child(2):hover /*Top group user preview*/,
._2HCBh:hover ._1N-sl ._1mDG- /*Details groupname*/,
.q9lllk4z:hover /*Details username */,
.qfejxiq4 .Mk0Bp._30scZ:hover /*Details username business*/,
.njub1g37 span._11JPr:hover /*Starred messages user/group name*/,
.a4ywakfo.qt60bha0:hover /*About user phone number*/,
._3IzYj:hover /*Message in chat*/,
.Efdtr:hover /* name in contact attachment */,
.djhxrpsl:hover /* name in multi contact attachment */,

/* updated wa version (v2.3000.xx) */
div[role="listitem"] ._ak8q:hover /* user/group name in message list */,
div[role="button"][class=""] ._ak8q:hover /* user/group name in details list and popup list */,
div[role="dialog"] ._ak8q:hover /* user name in contact popup list */,
div[role="dialog"] div.copyable-text:hover /* phone number and business user name in contact popup list */,
div[role="listitem"] ._am_2:hover /* community name */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(1):hover /* user/group name at the top of chat panel */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(2):hover /* user/group details at the top of chat panel */,
div._ahxj:hover /* user name in group chat messages */,
div._ahz1:hover /* user name in contact attachment */,
div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62:hover /* user name in multiple contacts attachment */,
div.overlay ._ak8q:hover /* user name in overlay media view */,
h2.xngnso2.x1fcty0u.x2b8uid:hover /* user name in details info */,
div.x2b8uid.x193iq5w.xqmxbcd:hover /* group name in details info */,
div.x1evy7pa.x1gslohp:hover /* user phone number in details info*/,
span.x1lkfr7t.xdbd6k5.x1fcty0u.xw2npq5:nth-child(2):hover /* user phone number in details info*/,
div.x1evy7pa.x1kgmq87.x2b8uid:hover /* group short details in details info */,
div.xlm9qay.x1s688f.x1e56ztr:hover /* business user name in details info */,
div.xlm9qay.x1s688f.x1e56ztr + div:hover /* business short details in details info */,
div.x2b8uid > .xzueoph + div:hover /* business category in details info */,
div.xkhd6sd:not([role]) > ._ajxu > div:hover /* business about in details info */,
div.xkhd6sd._ajxt > ._ajxu > div:hover /* business phone number in details info */,
div._ak1d > div:first-child > div:first-child > :not(:first-child):hover /* user/group name in starred message list */
{
  filter: blur(0) grayscale(0);
  transition-delay: 0.3s;
}

/* updated wa version (v2.3000.xx) */
/* prevent cropped blur */
div._ak1d > div:first-child > div:first-child /* user/group name in starred message list */
{
  overflow: visible;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
/* mediaGallery */
.tukmaf4q:hover /*media preview in gallery*/,
._1Pr6q:hover /*media preview in send media*/,

/* mediaPreview */
._2AOIt div.ktbp76dp div[role="button"]:hover img /*image landscape*/,
._2AOIt div.eu4mztcy div[role="button"]:hover img /*image potrait*/,
._2AOIt div.ktbp76dp > div[role="button"]:hover /*video landscape*/,
._2AOIt div.eu4mztcy > div[role="button"]:hover /*video potrait*/,
._2AOIt .cm280p3y > div[role="button"] > div.g0rxnol2.fe3aadhc.g0rxnol2.ln8gz9je:hover /*document image*/,
._2AOIt .cm280p3y > div[role="button"] > div > div > div:not(:last-child):hover /*document*/,
._2AOIt .M6sU5:hover /*link*/,
._1BOF7 ._3cupO > div:not(.LldYr):hover /*link list*/,
._3V9pc:hover /* gif */,
.kknmh:hover /*media reply thumb*/,
._2MmTH:hover /*media send preview*/,
.ZRhsD._2foMf:hover /*Sticker*/,

/* messages */
._2AOIt:hover div:first-child /*normal message*/,
._3cupO:hover /*link list message*/,
._1qNn2 ._1nCcB:hover /*sticker*/,
._1BOF7 ._1sykI:hover /*blue info bar*/,

/* messagesPreview */
.vQ0w7:hover /*message preview*/,

/* name */
div:not([role]) > div:not([role]) > ._8nE1Y ._21S-L:hover /*user/group name in search message*/,
div[role="row"] > div > ._8nE1Y ._21S-L:hover /*user/group name in message list*/,
div[role="button"] > div > ._8nE1Y ._21S-L:hover /*user/group name in non message list*/,
._3W2ap:hover /*Top user/group name*/,
._2au8k div:nth-child(2):hover /*Top group user preview*/,
._2HCBh:hover ._1N-sl ._1mDG- /*Details groupname*/,
.q9lllk4z:hover /*Details username */,
.qfejxiq4 .Mk0Bp._30scZ:hover /*Details username business*/,
.njub1g37 span._11JPr:hover /*Starred messages user/group name*/,
.a4ywakfo.qt60bha0:hover /*About user phone number*/,
._3IzYj:hover /*Message in chat*/,
.Efdtr:hover /* name in contact attachment */,
.djhxrpsl:hover /* name in multi contact attachment */,

/* profilePic */
[role="row"] > div > ._1AHcd ._13jwn:hover /*profile pic message list*/,
[role="button"] > div > ._1AHcd ._13jwn:hover /*profile pic non message list*/,
._2pr2H:hover /*message view profile pic*/,
._3WByx:hover /*self profile pic*/,
.stnyektq:hover /*group chat msg profile pic*/,
._3oha0._2xaO4:hover /* voice message profile pic */,
._3dPH0:hover /* contacts attachment */,
.b021xdil:hover /* multi contacts attachment */,
.pz0xruzv:hover /*Details direct profile pic*/,
.njub1g37 ._3xH7K:hover /*Details group profile pic*/,
.njub1g37 .kk3akd72.claouzo6:hover /*Starred message profile pic*/,

/* textInput */
._3Uu1_:hover /*textarea*/,

/* updated wa version (v2.3000.xx) */
/* mediaGallery */
div._ajuf._ajuh._ajug > div:hover /* media in overlay view */,
div.x1conndi:hover /* media thumb in overlay view and details panel */,
div.x4t2iug:hover /* media thumb in media gallery panel */,

/* mediaPreview */
div._amk4 > ._amk6:hover :is(div, button)[role="button"][class]:not(.x13yyeie, .x1dxgm4b, .x7fhd9j, ._ak3u, ._aju3, [data-js-context-icon], .x1a06ls3, .x6ikm8r.x10wlt62.xlyipyv) /* media messages in chat panel and contact attachment button */,
div._aju3:hover ._agtn > div /* media in quoted message */,
div._aju3:hover .x1ozewix /* icon for filename in quoted message */,
div._aju3:hover .x1ozewix + span /* filename in quoted message */,
div._aju3:hover span._ajxd._ajxk /* sticker in quoted message */,
._amk6:hover div._ahz2 /* user profile pic in contact attachment */,
._amk6:hover div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti /* user profile pic in multiple contact attachment */,
._amk6:hover div._ahz1 /* user name in contact attachment */,
._amk6:hover div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62 /* user name in multiple contacts attachment */,
div._ak4o:hover /* voice note / audio in chat panel */,
div._ahy5 > div:hover /* link preview in chat panel */,
div._ak15 > ._ahwq:hover /* some link preview in link list panel */,
span._ajxd._ajxk > ._ajxj._ajxd:hover /* sticker in chat panel */,
div.xz9dduz > div:first-child:hover /* maps / location */,
div._ajwt > div:first-child > div:nth-child(2) > div:hover /* media preview in send media */,
div._ak3i:hover /* media preview thumb in send media */,
div._ajwt .xm0mufa > div:hover /* document filename in send media */,

/* messages */
div._amk4 > ._amk6:hover /* normal message text */,
div._amk4 ._am2s:hover /* sticker message */,

/* messagesPreview */
div._ak8k:hover /* message preview */,

/* name */
div[role="listitem"] ._ak8q:hover /* user/group name in message list */,
div[role="button"][class=""] ._ak8q:hover /* user/group name in details list and popup list */,
div[role="dialog"] ._ak8q:hover /* user name in contact popup list */,
div[role="dialog"] div.copyable-text:hover /* phone number and business user name in contact popup list */,
div[role="listitem"] ._am_2:hover /* community name */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(1):hover /* user/group name at the top of chat panel */,
div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(2):hover /* user/group details at the top of chat panel */,
div._ahxj:hover /* user name in group chat messages */,
div._ahz1:hover /* user name in contact attachment */,
div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62:hover /* user name in multiple contacts attachment */,
div.overlay ._ak8q:hover /* user name in overlay media view */,
h2.xngnso2.x1fcty0u.x2b8uid:hover /* user name in details info */,
div.x2b8uid.x193iq5w.xqmxbcd:hover /* group name in details info */,
div.x1evy7pa.x1gslohp:hover /* user phone number in details info*/,
span.x1lkfr7t.xdbd6k5.x1fcty0u.xw2npq5:nth-child(2):hover /* user phone number in details info*/,
div.x1evy7pa.x1kgmq87.x2b8uid:hover /* group short details in details info */,
div.xlm9qay.x1s688f.x1e56ztr:hover /* business user name in details info */,
div.xlm9qay.x1s688f.x1e56ztr + div:hover /* business short details in details info */,
div.x2b8uid > .xzueoph + div:hover /* business category in details info */,
div.xkhd6sd:not([role]) > ._ajxu > div:hover /* business about in details info */,
div.xkhd6sd._ajxt > ._ajxu > div:hover /* business phone number in details info */,
div._ak1d > div:first-child > div:first-child > :not(:first-child):hover /* user/group name in starred message list */,

/* profilePic */
div[role="listitem"] ._ak8h:hover /* user/group profile pic in message list */,
div[role="button"][class=""] ._ak8h:hover /* user/group profile pic in details list and popup list */,
div[role="dialog"] ._ak8h:hover /* user/group profile pic in details list and popup list */,
header > div[role="button"]:first-child > div:hover /* user/group profile pic at the top of chat panel */,
div._amk4 > div[role="button"]:hover /* user profile pic in group chat messages */,
div._ahz2:hover /* user profile pic in contact attachment */,
div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti:hover /* user profile pic in multiple contact attachment */,
div._ak4m:hover /* user profile pic in voice note chat */,
div.overlay ._ak8h:hover /* user profile pic in overlay media view */,
div.x78zum5.xl56j7k.x1fqp7bg > div[role="button"]:hover /* user profile pic in details panel */,
div[role="button"][class="x1n2onr6 x14yjl9h xudhj91 x18nykt9 xww2gxu"]:hover /* business profile pic in details panel */,
div.x10l6tqk.x13vifvy.x17qophe.xh8yej3.xiqx3za.x6ikm8r.x10wlt62.x1knukwh.xihgre1:hover /* business profile banner in details panel */,
div.x15e7hw7:hover /* business profile banner in catalog list */,
div.x1n2onr6.x1oysuqx.x1m3v4wt.x1gryazu.xkrivgy:hover /* group profile pic in details panel */,
div.overlay:not([data-animate-media-viewer]) ._ajuf._ajuh > div:hover /* user/group profile pic overlay view */,
div.x1okw0bk.x1w0mnb:hover /* user profile pic in starred message list */,

/* textInput */
div._ak1l:hover /* message text input */,
div._ak1r:hover /* message text input */
{
  transition-delay: 0.04s !important;
  -webkit-transition-duration: 0s !important;
  -moz-transition-duration: 0s !important;
  -o-transition-duration: 0s !important;
  transition-duration: 0s !important;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
[role="row"] > div > ._1AHcd ._13jwn /*profile pic message list*/,
[role="button"] > div > ._1AHcd ._13jwn /*profile pic non message list*/,
._2pr2H /*message view profile pic*/,
._3WByx /*self profile pic*/,
.stnyektq /*group chat msg profile pic*/,
._3oha0._2xaO4 /* voice message profile pic */,
._3dPH0 /* contacts attachment */,
.b021xdil /* multi contacts attachment */,

/* updated wa version (v2.3000.xx) */
div[role="listitem"] ._ak8h /* user/group profile pic in message list */,
div[role="button"][class=""] ._ak8h /* user/group profile pic in details list and popup list */,
div[role="dialog"] ._ak8h /* user/group profile pic in details list and popup list */,
header > div[role="button"]:first-child > div /* user/group profile pic at the top of chat panel */,
div._amk4 > div[role="button"] /* user profile pic in group chat messages */,
div._ahz2 /* user profile pic in contact attachment */,
div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti /* user profile pic in multiple contact attachment */,
div._ak4m /* user profile pic in voice note chat */,
div.overlay ._ak8h /* user profile pic in overlay media view */
{
  filter: blur(8px) grayscale(1) !important;
  transition-delay: 0s;
}
/* former wa version (v2.2412.xx) */
.pz0xruzv /*Details direct profile pic*/,
.njub1g37 ._3xH7K /*Details group profile pic*/,

/* updated wa version (v2.3000.xx) */
div.x78zum5.xl56j7k.x1fqp7bg > div[role="button"] /* user profile pic in details panel */,
div[role="button"][class="x1n2onr6 x14yjl9h xudhj91 x18nykt9 xww2gxu"] /* business profile pic in details panel */,
div.x10l6tqk.x13vifvy.x17qophe.xh8yej3.xiqx3za.x6ikm8r.x10wlt62.x1knukwh.xihgre1 /* business profile banner in details panel */,
div.x15e7hw7 /* business profile banner in catalog list */,
div.x1n2onr6.x1oysuqx.x1m3v4wt.x1gryazu.xkrivgy /* group profile pic in details panel */,
div.overlay:not([data-animate-media-viewer]) ._ajuf._ajuh > div /* user/group profile pic overlay view */
{
  filter: blur(var(--pp-lg-blur)) grayscale(1);
  transition-delay: 0s;
}
/* former wa version (v2.2412.xx) */
.njub1g37 .kk3akd72.claouzo6 /*Starred message profile pic*/,

/* updated wa version (v2.3000.xx) */
div.x1okw0bk.x1w0mnb /* user profile pic in starred message list */
{
  filter: blur(var(--pp-sm-blur)) grayscale(1);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
[role="row"] > div > ._1AHcd ._13jwn:hover /*profile pic message list*/,
[role="button"] > div > ._1AHcd ._13jwn:hover /*profile pic non message list*/,
._2pr2H:hover /*message view profile pic*/,
._3WByx:hover /*self profile pic*/,
.stnyektq:hover /*group chat msg profile pic*/,
._3oha0._2xaO4:hover /* voice message profile pic */,
._3dPH0:hover /* contacts attachment */,
.b021xdil:hover /* multi contacts attachment */,
.pz0xruzv:hover /*Details direct profile pic*/,
.njub1g37 ._3xH7K:hover /*Details group profile pic*/,
.njub1g37 .kk3akd72.claouzo6:hover /*Starred message profile pic*/,

/* updated wa version (v2.3000.xx) */
div[role="listitem"] ._ak8h:hover /* user/group profile pic in message list */,
div[role="button"][class=""] ._ak8h:hover /* user/group profile pic in details list and popup list */,
div[role="dialog"] ._ak8h:hover /* user/group profile pic in details list and popup list */,
header > div[role="button"]:first-child > div:hover /* user/group profile pic at the top of chat panel */,
div._amk4 > div[role="button"]:hover /* user profile pic in group chat messages */,
div._ahz2:hover /* user profile pic in contact attachment */,
div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti:hover /* user profile pic in multiple contact attachment */,
div._ak4m:hover /* user profile pic in voice note chat */,
div.overlay ._ak8h:hover /* user profile pic in overlay media view */,
div.x78zum5.xl56j7k.x1fqp7bg > div[role="button"]:hover /* user profile pic in details panel */,
div[role="button"][class="x1n2onr6 x14yjl9h xudhj91 x18nykt9 xww2gxu"]:hover /* business profile pic in details panel */,
div.x10l6tqk.x13vifvy.x17qophe.xh8yej3.xiqx3za.x6ikm8r.x10wlt62.x1knukwh.xihgre1:hover /* business profile banner in details panel */,
div.x15e7hw7:hover /* business profile banner in catalog list */,
div.x1n2onr6.x1oysuqx.x1m3v4wt.x1gryazu.xkrivgy:hover /* group profile pic in details panel */,
div.overlay:not([data-animate-media-viewer]) ._ajuf._ajuh > div:hover /* user/group profile pic overlay view */,
div.x1okw0bk.x1w0mnb:hover /* user profile pic in starred message list */
{
  filter: blur(0) grayscale(0) !important;
  transition-delay: 0.3s;
}


/* updated wa version (v2.3000.xx) */
/* prevent cropped blur */
div._ak1d > div:first-child > div:first-child /* user profile pic in starred message list */
{
  overflow: visible;
}

/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
._3Uu1_ /* textarea */,

/* updated wa version (v2.3000.xx) */
div._ak1l /* message text input */,
div._ak1r /* message text input */
{
  filter: grayscale(1) opacity(0.25);
}

/* former wa version (v2.2412.xx) */
._3Uu1_:hover /* textarea */,

/* updated wa version (v2.3000.xx) */
div._ak1l:hover /* message text input */,
div._ak1r:hover /* message text input */
{
  filter: grayscale(0) opacity(1);
  transition-delay: 0.3s;
}


/* Privacy Extension for WhatsApp(TM) Web                       */
/* Copyright (c) 2024 Lukas Lenhardt - lukaslen.com             */
/* Released under the MIT license, see LICENSE file for details */

/* former wa version (v2.2412.xx) */
/* mediaGallery */
body:hover .tukmaf4q /*media preview in gallery*/,
body:hover ._1Pr6q /*media preview in send media*/,

/* mediaPreview */
body:hover ._2AOIt div.ktbp76dp div[role="button"] img /*image landscape*/,
body:hover ._2AOIt div.eu4mztcy div[role="button"] img /*image potrait*/,
body:hover ._2AOIt div.ktbp76dp > div[role="button"] /*video landscape*/,
body:hover ._2AOIt div.eu4mztcy > div[role="button"] /*video potrait*/,
body:hover ._2AOIt .cm280p3y > div[role="button"] > div.g0rxnol2.fe3aadhc.g0rxnol2.ln8gz9je /*document image*/,
body:hover ._2AOIt .cm280p3y > div[role="button"] > div > div > div:not(:last-child) /*document*/,
body:hover ._2AOIt .M6sU5 /*link*/,
body:hover ._1BOF7 ._3cupO > div:not(.LldYr) /*link list*/,
body:hover ._3V9pc /* gif */,
body:hover .kknmh /*media reply thumb*/,
body:hover ._2MmTH /*media send preview*/,
body:hover .ZRhsD._2foMf /*Sticker*/,

/* messages */
body:hover ._2AOIt div:first-child /*normal message*/,
body:hover ._3cupO /*link list message*/,
body:hover ._1qNn2 ._1nCcB /*sticker*/,
body:hover ._1BOF7 ._1sykI /*blue info bar*/,

/* messagesPreview */
body:hover .vQ0w7 /*message preview*/,

/* name */
body:hover div:not([role]) > div:not([role]) > ._8nE1Y ._21S-L /*user/group name in search message*/,
body:hover div[role="row"] > div > ._8nE1Y ._21S-L /*user/group name in message list*/,
body:hover div[role="button"] > div > ._8nE1Y ._21S-L /*user/group name in non message list*/,
body:hover ._3W2ap /*Top user/group name*/,
body:hover ._2au8k div:nth-child(2) /*Top group user preview*/,
body:hover ._2HCBh ._1N-sl ._1mDG- /*Details groupname*/,
body:hover .q9lllk4z /*Details username */,
body:hover .qfejxiq4 .Mk0Bp._30scZ /*Details username business*/,
body:hover .njub1g37 span._11JPr /*Starred messages user/group name*/,
body:hover .a4ywakfo.qt60bha0 /*About user phone number*/,
body:hover ._3IzYj /*Message in chat*/,
body:hover .Efdtr /* name in contact attachment */,
body:hover .djhxrpsl /* name in multi contact attachment */,

/* profilePic */
body:hover [role="row"] > div > ._1AHcd ._13jwn /*profile pic message list*/,
body:hover [role="button"] > div > ._1AHcd ._13jwn /*profile pic non message list*/,
body:hover ._2pr2H /*message view profile pic*/,
body:hover ._3WByx /*self profile pic*/,
body:hover .stnyektq /*group chat msg profile pic*/,
body:hover ._3oha0._2xaO4 /* voice message profile pic */,
body:hover ._3dPH0 /* contacts attachment */,
body:hover .b021xdil /* multi contacts attachment */,
body:hover .pz0xruzv /*Details direct profile pic*/,
body:hover .njub1g37 ._3xH7K /*Details group profile pic*/,
body:hover .njub1g37 .kk3akd72.claouzo6 /*Starred message profile pic*/,

/* updated wa version (v2.3000.xx) */
/* mediaGallery */
body:hover div._ajuf._ajuh._ajug > div /* media in overlay view */,
body:hover div.x1conndi /* media thumb in overlay view and details panel */,
body:hover div.x4t2iug /* media thumb in media gallery panel */,

/* mediaPreview */
body:hover div._amk4 > ._amk6 :is(div, button)[role="button"][class]:not(.x13yyeie, .x1dxgm4b, .x7fhd9j, ._ak3u, ._aju3, [data-js-context-icon], .x1a06ls3, .x6ikm8r.x10wlt62.xlyipyv) /* media messages in chat panel and contact attachment button */,
body:hover div._aju3 ._agtn > div /* media in quoted message */,
body:hover div._aju3 .x1ozewix /* icon for filename in quoted message */,
body:hover div._aju3 .x1ozewix + span /* filename in quoted message */,
body:hover div._aju3 span._ajxd._ajxk /* sticker in quoted message */,
body:hover div._amk6 div._ahz2 /* user profile pic in contact attachment */,
body:hover div._amk6 div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti /* user profile pic in multiple contact attachment */,
body:hover div._amk6 div._ahz1 /* user name in contact attachment */,
body:hover div._amk6 div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62 /* user name in multiple contacts attachment */,
body:hover div._amk4 > ._amk6 :is(div, button)[role="button"]:not(.x13yyeie, ._ak3u, [data-js-context-icon], .x1a06ls3) /* media messages in chat panel (also quoted message and contact attachment button) */,
body:hover div._ak4o /* voice note / audio in chat panel */,
body:hover div._ahy5 > div /* link preview in chat panel */,
body:hover div._ak15 > ._ahwq /* some link preview in link list panel */,
body:hover span._ajxd._ajxk > ._ajxj._ajxd /* sticker in chat panel */,
body:hover div.xz9dduz > div:first-child /* maps / location */,
body:hover div._ajwt > div:first-child > div:nth-child(2) > div /* media preview in send media */,
body:hover div._ak3i /* media preview thumb in send media */,
body:hover div._ajwt .xm0mufa > div /* document filename in send media */,

/* messages */
body:hover div._amk4 > ._amk6 /* normal message text */,
body:hover div._amk4 ._am2s /* sticker message */,

/* messagesPreview */
body:hover div._ak8k /* message preview */,

/* name */
body:hover div[role="listitem"] ._ak8q /* user/group name in message list */,
body:hover div[role="button"][class=""] ._ak8q /* user/group name in details list and popup list */,
body:hover div[role="dialog"] ._ak8q /* user name in contact popup list */,
body:hover div[role="dialog"] div.copyable-text /* phone number and business user name in contact popup list */,
body:hover div[role="listitem"] ._am_2 /* community name */,
body:hover div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(1) /* user/group name at the top of chat panel */,
body:hover div[role="button"].x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xeuugli > div:nth-child(2) /* user/group details at the top of chat panel */,
body:hover div._ahxj /* user name in group chat messages */,
body:hover div._ahz1 /* user name in contact attachment */,
body:hover div.xs83m0k.x1iyjqo2.xdl72j9.x18wx58x.x6ikm8r.x10wlt62 /* user name in multiple contacts attachment */,
body:hover div.overlay ._ak8q /* user name in overlay media view */,
body:hover h2.xngnso2.x1fcty0u.x2b8uid /* user name in details info */,
body:hover div.x2b8uid.x193iq5w.xqmxbcd /* group name in details info */,
body:hover div.x1evy7pa.x1gslohp /* user phone number in details info*/,
body:hover span.x1lkfr7t.xdbd6k5.x1fcty0u.xw2npq5:nth-child(2) /* user phone number in details info*/,
body:hover div.x1evy7pa.x1kgmq87.x2b8uid /* group short details in details info */,
body:hover div.xlm9qay.x1s688f.x1e56ztr /* business user name in details info */,
body:hover div.xlm9qay.x1s688f.x1e56ztr + div /* business short details in details info */,
body:hover div.x2b8uid > .xzueoph + div /* business category in details info */,
body:hover div.xkhd6sd:not([role]) > ._ajxu > div /* business about in details info */,
body:hover div.xkhd6sd._ajxt > ._ajxu > div /* business phone number in details info */,
body:hover div._ak1d > div:first-child > div:first-child > :not(:first-child) /* user/group name in starred message list */,

/* profilePic */
body:hover div[role="listitem"] ._ak8h /* user/group profile pic in message list */,
body:hover div[role="button"][class=""] ._ak8h /* user/group profile pic in details list and popup list */,
body:hover div[role="dialog"] ._ak8h /* user/group profile pic in details list and popup list */,
body:hover header > div[role="button"]:first-child > div /* user/group profile pic at the top of chat panel */,
body:hover div._amk4 > div[role="button"] /* user profile pic in group chat messages */,
body:hover div._ahz2 /* user profile pic in contact attachment */,
body:hover div.x2lah0s.x1c4vz4f.xdl72j9.x194xeti /* user profile pic in multiple contact attachment */,
body:hover div._ak4m /* user profile pic in voice note chat */,
body:hover div.overlay ._ak8h /* user profile pic in overlay media view */,
body:hover div.x78zum5.xl56j7k.x1fqp7bg > div[role="button"] /* user profile pic in details panel */,
body:hover div[role="button"][class="x1n2onr6 x14yjl9h xudhj91 x18nykt9 xww2gxu"] /* business profile pic in details panel */,
body:hover div.x10l6tqk.x13vifvy.x17qophe.xh8yej3.xiqx3za.x6ikm8r.x10wlt62.x1knukwh.xihgre1 /* business profile banner in details panel */,
body:hover div.x15e7hw7 /* business profile banner in catalog list */,
body:hover div.x1n2onr6.x1oysuqx.x1m3v4wt.x1gryazu.xkrivgy /* group profile pic in details panel */,
body:hover div.overlay:not([data-animate-media-viewer]) ._ajuf._ajuh > div /* user/group profile pic overlay view */,
body:hover div.x1okw0bk.x1w0mnb /* user profile pic in starred message list */
{
  filter: blur(0) grayscale(0);
  transition-delay: 0s;
}

/* former wa version (v2.2412.xx) */
/* textInput */
body:hover ._3Uu1_ /*textarea*/,

/* updated wa version (v2.3000.xx) */
/* textInput */
div._ak1l:hover /* message text input */,
div._ak1r:hover /* message text input */
{
  filter: grayscale(0) opacity(1);
}

div[role='button'].x78zum5 .x78zum5 .x78zum5 .x1c4vz4f .x78zum5 {
      filter: blur(8px) grayscale(1) !important;
      transition: 0;
}
div[role='button'].x78zum5 .x78zum5 .x78zum5 .x1c4vz4f .x78zum5:hover {
      filter: blur(0) grayscale(0) !important;
      transition: 0;
}

.x1n2onr6.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p {
      filter: blur(8px) grayscale(1) !important;
      transition: 0;
}
.x1n2onr6.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p:hover {
      filter: blur(0) grayscale(0) !important;
      transition: 0;
}

/* ============================================================ */
/* WhatsDesk stable-selector privacy block                      */
/* Targets data-testid / contenteditable attributes instead of  */
/* WhatsApp's obfuscated, frequently-regenerated class names.    */
/* Fixes conversation messages, filter chips and the compose     */
/* input on WhatsApp Web v2.3xxx (Lexical), which the old rules   */
/* missed (shifted classes) or no-op'd (undefined var() blur).   */
/* ============================================================ */

/* Filter chips (All / Unread / Favorites / custom / Groups ...) */
div[data-testid="filter-button"] {
      filter: blur(6px);
      transition: filter 0.2s ease;
}
div[data-testid="filter-button"]:hover {
      filter: blur(0);
}

/* Conversation message bubbles -- blur whole bubble (text, sender,
   timestamp and any media), reveal one message at a time on hover */
div[data-testid="msg-container"] {
      filter: blur(8px) grayscale(1);
      transition: filter 0.2s ease;
}
div[data-testid="msg-container"]:hover {
      filter: blur(0) grayscale(0);
}

/* Compose text region (Lexical) -- blurred even while typing; reveal on hover only.
   (Focus-reveal intentionally omitted so the draft stays blurred as you type.)
   The visible placeholder + typed text live in DIFFERENT children of the wrapper,
   so we blur the wrapper to cover both. The action buttons (+, emoji, mic) are
   siblings outside this wrapper and stay crisp. */
div.lexical-rich-text-input {
      filter: blur(6px);
      transition: filter 0.2s ease;
}
div.lexical-rich-text-input:hover {
      filter: blur(0);
}

/* Fallback: blur the typed text directly via its data-testid, in case the
   wrapper class above is ever renamed by a WhatsApp update. */
div[data-testid="conversation-compose-box-input"] {
      filter: blur(6px);
      transition: filter 0.2s ease;
}
div[data-testid="conversation-compose-box-input"]:hover {
      filter: blur(0);
}

/* Message reactions (sibling of the bubble, so not covered by msg-container) */
button[data-testid="reaction-bubble"] {
      filter: blur(6px);
      transition: filter 0.2s ease;
}
button[data-testid="reaction-bubble"]:hover {
      filter: blur(0);
}

/* Chat header -- group/contact name + subtitle (member list / status).
   Wraps only the text column; the avatar and action icons stay crisp. */
div[data-testid="conversation-info-header"] {
      filter: blur(6px);
      transition: filter 0.2s ease;
}
div[data-testid="conversation-info-header"]:hover {
      filter: blur(0);
}

/* Pinned-message bar (grayscale too, since a pin can preview media) */
button[data-testid="conversation-subheader"] {
      filter: blur(6px) grayscale(1);
      transition: filter 0.2s ease;
}
button[data-testid="conversation-subheader"]:hover {
      filter: blur(0) grayscale(0);
}

/* ============================================================ */
/* Profile / avatar blur — container-level, DOM-grounded        */
/* Blurs photo, silhouette AND initials avatars alike by         */
/* blurring the avatar CONTAINER, not the <svg>. Default-contact */
/* avatars render their <svg> at a different intrinsic size      */
/* (e.g. height="212"), so size-qualified svg[height=...] rules  */
/* would silently miss every non-photo avatar. Each reveals on   */
/* hover, consistent with the rest of the sheet.                 */
/* ============================================================ */

/* Spot 1 — chat-list row avatar (main list AND Archived share
   the same cell-frame-container). First child is the avatar
   column; the second child holds the name + last-message preview
   (incl. emoji <img>), so this does not blur preview emoji. */
div[data-testid="cell-frame-container"] > div:first-child {
      filter: blur(8px) grayscale(1);
      transition: filter 0.2s ease;
}
div[data-testid="cell-frame-container"] > div:first-child:hover {
      filter: blur(0) grayscale(0);
}

/* Spot 2 — open chat's header avatar. The "Profile details" button
   contains only the avatar, so blurring the button is safe.
   NOTE: aria-label is locale-dependent (breaks if WhatsApp's UI
   language changes); the #main header rule below is a photo-only
   locale-proof backup. */
div[aria-label="Profile details"] {
      filter: blur(8px) grayscale(1);
      transition: filter 0.2s ease;
}
div[aria-label="Profile details"]:hover {
      filter: blur(0) grayscale(0);
}
#main header svg[height="40"] {
      filter: blur(8px) grayscale(1);
      transition: filter 0.2s ease;
}
#main header svg[height="40"]:hover {
      filter: blur(0) grayscale(0);
}

/* Spot 3 — your own profile avatar in the left nav rail
   (covers both the default silhouette and a set profile photo). */
div[data-testid="navbar-item-me-tab-photo"] {
      filter: blur(8px) grayscale(1);
      transition: filter 0.2s ease;
}
div[data-testid="navbar-item-me-tab-photo"]:hover {
      filter: blur(0) grayscale(0);
}


`;
    }

    // Function to toggle privacy mode
    function togglePrivacy(enabled) {
        if (enabled === isEnabled) return;
        
        if (!styleElement) {
            createStyle();
        }

        if (enabled) {
            document.head.appendChild(styleElement);
        } else {
            styleElement.remove();
        }
        
        isEnabled = enabled;
        console.log('Privacy mode:', isEnabled ? 'enabled' : 'disabled');
    }

    // Listen for settings changes
    window.eventMain = window.eventMain || {};
    window.eventMain.on = window.eventMain.on || function(name, callback) {
        if (name === 'settings') {
            callback({ privacyBlur: { value: false } });
        }
    };

    // Initial setup
    createStyle();
    togglePrivacy(true);

    // Listen for settings updates
    window.eventMain.on('settings', (settings) => {
        if (settings.privacyBlur) {
            togglePrivacy(settings.privacyBlur.value);
        }
    });

    // Make toggle function globally available
    window.togglePrivacyMode = togglePrivacy;
})(); 