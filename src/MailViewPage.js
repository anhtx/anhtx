import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './components/Button/Button';
import pretty from 'pretty';
import { CopyBlock, atomOneDark } from 'react-code-blocks';

const IMG_PATH = {
    RELATIVE: 'img/',
    ABSOLUTE: '/img/'
};

const MailViewPage = () => {
    const location = useLocation();
    const [isHTMLSource, setIsHTMLSource] = useState(false);
    const [isAbsoluteImage, setIsAbsoluteImage] = useState(false);
    const [imagePath, setImgPath] = useState(IMG_PATH.RELATIVE);

    const {
        prepareHeader,
        titleMail,
        titleFirstDescription,
        textFirstDescriptionA,
        textFirstDescriptionB,
        titleSecondDescription,
        textSecondDescriptionA,
        textSecondDescriptionB,
        nameProduct,
        subProductContent,
        heightLogoImage,
        heightMainImage,
        heightMainImageTitleProduct,
        heightImageProductTK1,
        heightImageLineProductTK,
        heightImageProductTK2,
        heightMainImageTitleProductONC,
        heightImageProductONC1,
        heightImageLineProductONC,
        heightImageProductONC2,
        heightImageLastLineProductONC,
        altMainImageTitle,
        altProductTK1,
        altProductTK2,
        altMainImageTitleProductONC,
        altProductONC1,
        altProductONC2,
        detailProduct
    } = location.state;
 
    const regXPath = /.*fakepath./g;
    const regXImgAbsolute = /[/][?].*/g;

    const inspNumber = location.state.inspNumber;
    const linkKey = location.state.linkKey;
    
    const logoImage = location.state.logoImage.replace(regXPath, imagePath) || '##IMG_PATH##';
    const mainImage = location.state.mainImage.replace(regXPath, imagePath) || '##IMG_PATH##';
    
    const mainImageTitleProduct = location.state.mainImageTitleProduct.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageProductTK1 = location.state.imageProductTK1.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageLineProductTK =  location.state.imageLineProductTK.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageProductTK2 =  location.state.imageProductTK2.replace(regXPath, imagePath) || '##IMG_PATH##';
    
    const mainImageTitleProductONC = location.state.mainImageTitleProductONC.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageProductONC1 = location.state.imageProductONC1.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageLineProductONC = location.state.imageLineProductONC.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageProductONC2 = location.state.imageProductONC2.replace(regXPath, imagePath) || '##IMG_PATH##';
    const imageLastLineProductONC = location.state.imageLastLineProductONC.replace(regXPath, imagePath) || '##IMG_PATH##';

    const linkHeader = location.state.linkHeader || `https://www.suntory-kenko.com/mail/10/spot/prspwthdrev/202109/insp${inspNumber}/?key=${linkKey || '##LINKKEY##'}`
    const linkProductTK1 = location.state.linkProductTK1 || `https://www.suntory-kenko.com/cart/addcartitem/?key=${linkKey || '##LINKKEY##'}`;
    const linkProductTK2 = location.state.linkProductTK1 || `https://www.suntory-kenko.com/cart/addcartitem/?key=${linkKey || '##LINKKEY##'}`;
    const linkProductONC1 = location.state.linkProductTK1 || `https://www.suntory-kenko.com/cart/addcartitem/?key=${linkKey || '##LINKKEY##'}`;
    const linkProductONC2 = location.state.linkProductTK1 || `https://www.suntory-kenko.com/cart/addcartitem/?key=${linkKey || '##LINKKEY##'}`;

    const absoluteImagePath = linkHeader.replace(regXImgAbsolute, IMG_PATH.ABSOLUTE);

    const stringContentMailHTML = `
    <html>
        <head>
            <title>SUNTORY | ????????????????????????????????????????????????????????????????????????[????????????]</title>
            <meta http-equiv='Content-Type' content='text/html; charset=Shift_JIS'>
            <meta http-equiv="Content-Style-Type" content="text/css">
            <meta name="Description" content="">
            <meta name="Keywords" content="">
            <meta name="robots" content="noindex,nofollow">
            <meta name="format-detection" content="telephone=no">
            <style type="text/css">
                <!-- 
                body {-webkit-text-size-adjust: none;}
                p {
                    margin: 0;
                    padding: 0;
                    background-image: url(https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif);
                    max-height: 100% !important;
                }
                
                img {
                    border: none;
                    display: block;
                }
                
                area {
                    border: none;
                    outline: none;
                }
                
                a:hover {
                    text-decoration: none;
                }
                
                .footer a:link {
                    color: #FFFFFF;
                }
                
                .footer a:visited {
                    color: #FFFFFF;
                }
                
                .footer a:hover {
                    color: #FFFFFF;
                    text-decoration: none;
                }
                
                .footer a:active {
                    color: #FFFFFF;
                }
                
                .last_content p:last-child {
                    margin: 0 !important;
                }
                -->
            </style>
        </head>
        
        <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
            <div align="center">
        
                <!-- html??????????????????????????????????????? ???????????? -->
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" width="1" height="10" alt=""></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">
                            <p class="sp_small" style="margin:0; padding:0; font-size:13px; line-height:20px;">
                                <a href="${linkHeader}" target="_blank" style="color:#333333;">
                                    ${prepareHeader}
                                </a>
                            </p>
                        </td>
                    </tr>
                </table>
                <!-- html??????????????????????????????????????? ???????????? -->
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td colspan="2" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" width="1" height="20" alt=""></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="left" valign="middle" style="font-size:0;"><img src="${logoImage}" width="582" height="${heightLogoImage}" alt="SUNTORY"></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" width="1" height="20" alt=""></td>
                    </tr>
                    <tr>
                        <td width="291" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/h_spacer.gif" width="291" height="1" alt=""></td>
                        <td width="291" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/h_spacer.gif" width="291" height="1" alt=""></td>
                    </tr>
                </table>
        
        
                <!-- conts -->
        
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#eceff1">
                    <tr>
                        <td width="582" align="center">
                            <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" valign="top">
                                        <div style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color: #595959;">
                                            <h1 style="font-size: 23px; margin:30px 0; padding:0;">${titleMail}</h1>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="30"></td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="${mainImage}" alt="" width="582" height="${heightMainImage}"></td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="30"></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <div style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color: #595959;">
                                <h2 style="font-size: 22px; margin:0 0 14px; padding:0;">${titleFirstDescription}</h2>
                                <p style="font-size: 16px; margin:0 0 14px; padding:0;">${textFirstDescriptionA}</p>
                                <p style="font-size: 16px; margin:0 0 28px; padding:0;">${textFirstDescriptionB}</p>
                                
                                <h2 style="font-size: 22px; margin:0 0 14px; padding:0;">${titleSecondDescription}</h2>
                                <p style="font-size: 16px; margin:0 0 14px; padding:0;">${textSecondDescriptionA}</p>
                                <p style="font-size: 16px; margin:0; padding:0;">${textSecondDescriptionB}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="40"></td>
                    </tr>
                </table>
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td align="center" valign="top">
                            <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="582" align="center" valign="top" bgcolor="#eceff1">
                                        <div style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color: #595959;">
                                            <h3 style="font-size: 24px; margin:7px 0; padding:0;">${nameProduct}</h3>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="582" style="font-size:0;" bgcolor="#ffffff"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="582" height="2"></td>
                                </tr>
                                <tr>
                                    <td width="582" align="center" valign="top" bgcolor="#eceff1">
                                        <div style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color: #595959;">
                                            <h4 style="font-size: 18px; margin:7px 0; padding:0;">${subProductContent}</h4>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="30"></td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <img src="${mainImageTitleProduct}" alt="${altMainImageTitle}" width="582" height="${heightMainImageTitleProduct}">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <a href="${linkProductTK1}" target="_blank">
                                <img src="${imageProductTK1}" alt="${altProductTK1}" width="582" height="${heightImageProductTK1}">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <img src="${imageLineProductTK}" alt="" width="582" height="${heightImageLineProductTK}">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <a href="${linkProductTK2}" target="_blank">
                                <img src="${imageProductTK2}" alt="${altProductTK2}" width="582" height="${heightImageProductTK2}">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <img src="${mainImageTitleProductONC}" alt="${altMainImageTitleProductONC}" width="582" height="${heightMainImageTitleProductONC}">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <a href="${linkProductONC1}" target="_blank">
                                <img src="${imageProductONC1}" alt="${altProductONC1}" width="582" height="${heightImageProductONC1}">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <img src="${imageLineProductONC}" alt="" width="582" height="${heightImageLineProductONC}">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <a href="${linkProductONC2}" target="_blank">
                                <img src="${imageProductONC2}" alt="${altProductONC2}" width="582" height="${heightImageProductONC2}">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;">
                            <img src="${imageLastLineProductONC}" alt="" width="582" height="${heightImageLastLineProductONC}">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="30"></td>
                    </tr>
                </table>
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td align="left" valign="top">
                            <div class="last_content" style="font-family: Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, Osaka, sans-serif; color: #595959;">
                                ${detailProduct}
                            </div>
                        </td>
                    </tr>
                </table>
        
                <!-- /conts -->
        
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td colspan="3" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="40"></td>
                    </tr>
                    <tr>
                        <td colspan="3" align="center" valign="bottom" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/dpbox_top.gif" width="582" height="55" alt="???????????????????????????????????????????????????"></td>
                    </tr>
                    <tr>
                        <td colspan="3" align="center" valign="bottom" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/dpbox_txt.gif" alt="????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" width="582" height="74"></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" bgcolor="#bdbdbd" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" width="1" height="20"></td>
                        <td width="580" align="center" valign="top" style="font-size:0;">
                            <div style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/info_tell.gif" alt="???????????????????????????????????? 0120-333-310???????????????????????????????????????????????????????????? 0120-857-310??????????????????9:00???20:00?????????????????????????????????"></div>
                            <div style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="15"></div>
                            <table width="554" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="left" valign="top">
                                        <p style="margin:0; padding:0; font-size:10px; line-height:15px;">??????????????????????????????????????????????????????<br> ??????????????????????????????????????????????????????????????????????????????
                                            <br> ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                            <br> ???????????????????????????????????????????????????
                                            <br> ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                            <br> ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                            <br> ??????????????????????????????????????????????????????????????????????????????????????? <br> ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <div style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="15"></div>
                            <div style="font-size:0;">
                                <a href="https://www.suntory-kenko.com/secure/inquiry/?key=${linkKey || '##LINKKEY##'}" target="_blank"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/btn_toinfo.gif" alt="?????????????????????????????????" width="193" height="22" border="0"></a>
                            </div>
                            <div style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="15"></div>
                        </td>
                        <td width="1" align="center" valign="top" bgcolor="#bdbdbd" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" width="1" height="1"></td>
                    </tr>
                    <tr>
                        <td colspan="3" align="center" valign="top" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/dpbox_bottom.gif" width="582" height="10" alt=""></td>
                    </tr>
                </table>
                <table width="554" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="20"></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p style="margin:0; padding:0; font-size:10px; line-height:15px;">?????????????????????????????????????????????????????????????????????????????????????????????????????????<br> ???????????????????????????????????????????????????????????????????????????????????????
                                <br> ???????????????????????????
                                <a href="https://www.suntory-kenko.com/secure/inquiry/?key=${linkKey|| '##LINKKEY##'}" target="_blank">https://www.suntory-kenko.com/secure/inquiry/</a><br>
                                <br>???????????????????????????????????????????????????<a href="https://www.suntory-kenko.com/secure/mail/?key=${linkKey|| '##LINKKEY##'}" target="_blank">https://www.suntory-kenko.com/secure/mail/</a><br>??????????????????????????????<br>
                                <br> ?????????????????????????????????????????? <a href="https://www.suntory-kenko.com/secure/inquiry/?key=${linkKey|| '##LINKKEY##'}" target="_blank">https://www.suntory-kenko.com/secure/inquiry/</a><br><br> ?????????????????????????????????????????????????????????????????????????????????2-3-3
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="15"></td>
                    </tr>
                </table>
                <table width="582" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td bgcolor="#DDDDDD" style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/footer01.gif" alt="" width="582" height="35" border="0" usemap="#footer"></td>
                    </tr>
                    <tr>
                        <td align="center" valign="middle" bgcolor="#1692B6" style="padding:3px 0;">
                            <p style="margin:0; padding:0; font-size:10px; line-height:18px; color:#ffffff;" class="footer">??????????????????????????????????????????????????????<a href="https://www.suntory-kenko.com/?key=${linkKey || '##LINKKEY##'}" style="color:#ffffff;" target="_blank">https://www.suntory-kenko.com/</a><br> ???C???Copyright Suntory Holdings Limited. All rights reserved.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="5"></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p style="margin:0; padding:0; font-size:10px; line-height:14px; color:#505050;">???????????????????????????????????????????????????????????????????????????<br> ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:0;"><img src="https://www.suntory-kenko.com/contents/hmail/common/img/spacer.gif" alt="" width="1" height="5"></td>
                    </tr>
                </table>
        
                <map name="footer">
                <area shape="rect" coords="146,13,298,29" href="https://www.suntory-kenko.com/about/terms/?key=${linkKey || '##LINKKEY##'}" target="_blank" alt="????????????????????????????????????">
                <area shape="rect" coords="310,13,433,30" href="https://www.suntory.co.jp/privacy/" target="_blank" alt="??????????????????????????????">
                </map>
        
            </div>
        
            <!-- User Insight PCDF Code Start : suntory-kenko.com -->
            <script type="text/javascript">
                var _uic = _uic || {};
                var _uih = _uih || {};
                _uih['id'] = 53362;
                _uih['lg_id'] = '';
                _uih['fb_id'] = '';
                _uih['tw_id'] = '';
                _uih['uigr_1'] = '';
                _uih['uigr_2'] = '';
                _uih['uigr_3'] = '';
                _uih['uigr_4'] = '';
                _uih['uigr_5'] = '';
                _uih['uigr_6'] = '';
                _uih['uigr_7'] = '';
                _uih['uigr_8'] = '';
                _uih['uigr_9'] = '';
                _uih['uigr_10'] = '';
        
                /* DO NOT ALTER BELOW THIS LINE */
                /* WITH FIRST PARTY COOKIE */
                (function() {
                    var bi = document.createElement('script');
                    bi.type = 'text/javascript';
                    bi.async = true;
                    bi.src = '//cs.nakanohito.jp/b3/bi.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(bi, s);
                })();
            </script>
            <!-- User Insight PCDF Code End : suntory-kenko.com -->
        
        </body>
    
    </html>
    `

    const createMarkup = (stringTemplate) => {
        return {
            __html: stringTemplate
        };
    }; 

    const toggleShowHTMLSource = () => {
        setIsHTMLSource(!isHTMLSource);
    };

    const toggleViewMailContent = () => {
        setIsAbsoluteImage(!isAbsoluteImage);
        
        const sourceImagePath = !isAbsoluteImage ? absoluteImagePath : IMG_PATH.RELATIVE; 
        setImgPath(sourceImagePath);
    };

    const labelMailButton = !isAbsoluteImage ? 'Absolute mail' : 'Relative mail ';
    const labelViewButton = !isHTMLSource ? 'View source' : 'Preview';

    return (
        <div className='mail'>
            <div className='mail__header'>
                <h2 className='text--center'>The Suntory Content Mail {inspNumber && <strong>insp{inspNumber}</strong> } with {isAbsoluteImage ? 'Absolute Path' : 'Relative Path'}</h2>
                <div className='mail__action'>
                    <div className='mail__button'>
                        <Button type='button' onClickAction={toggleViewMailContent} label={labelMailButton} />
                        <Button type='button' onClickAction={toggleShowHTMLSource} label={labelViewButton} />
                    </div>
                    {isHTMLSource &&
                        <div className='copy'>
                            <p className='copy__text'>Copy HTML {isAbsoluteImage ? 'Absolute Path' : 'Relative Path'}</p>
                            <div className='copy__arrow'>
                                <div className='arrow'></div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {isHTMLSource &&
                <div className='mail_html'>
                    {
                        <CopyBlock
                            language='html'
                            text={pretty(stringContentMailHTML, { ocd: true })}
                            showLineNumbers={false}
                            theme={atomOneDark}
                            codeBlock
                        />
                        
                    }
                </div>
                
            }

            {!isHTMLSource &&
                <section dangerouslySetInnerHTML={createMarkup(stringContentMailHTML)} />
            }
        </div>
    );
};

export default MailViewPage;