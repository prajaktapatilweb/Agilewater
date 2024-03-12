import { acsmlink, csmlink, icpacclink, icpcatlink, icpentlink, polink, psm1link, scrumatscalelink } from "modules/commanmodules/Pagelinks";

const data = {

    IcpACC: {
        image: '/assets/images/courselogo/icplogo/ICP-ACC.webp',
        title: 'Agile Coaching',
        links: icpacclink,
        views: '1.8k',
    },
    Csm: {
        image: '/assets/images/courselogo/smlogo/CSM4.webp',
        title: 'Scrum Master',
        views: '1.2k',
        links: csmlink,
    },
    Scrumatscale: {
        image: '/assets/images/courselogo/ScrumatScale.webp',
        title: 'Scrum@Scale Practitioner',
        links: scrumatscalelink,
        views: '1.5k',
    },
    Prowner: {
        image: '/assets/images/courselogo/pologo/PO2.png',
        title: 'Product Owner',
        links: polink,
        views: '1.2k',
    },
    IcpCat: {
        image: '/assets/images/courselogo/icplogo/ICP-CAT.webp',
        title: 'ICP-CAT',
        links: icpcatlink,
        views: '1.2k',
    },
    PSM1: {
        image: '/assets/images/courselogo/smlogo/psm1.webp',
        title: 'PSM1',
        links: psm1link,
        views: '1.2k',
    },
    Freeimg: {
        image: '/assets/images/courselogo/FreeImg.png',
        title: 'Free Session',
        links: '/',
        views: '1.2k',
    },
    IcpEnt: {
        image: '/assets/images/courselogo/icplogo/ICP-ENT1.png',
        title: 'ICP-ENT',
        links: icpentlink,
        views: '1.2k',
    },
    ACSM: {
        image: '/assets/images/courselogo/smlogo/ACSM1.webp',
        title: 'ACSM',
        links: acsmlink,
        views: '1.2k',
    }



};


export const courseList2 = [
    data.IcpACC,
    data.Scrumatscale,
    data.Csm,
    data.Prowner

];
export const safeadvList = [
    data.IcpACC,
    data.Scrumatscale,
    data.Csm,
    data.Prowner

];
export const atscale = [
    data.IcpACC,
    data.Csm,
    data.Prowner,
    data.IcpCat,

];
// apgi data
export const apgiList = [
    data.IcpACC,
    data.Scrumatscale,
    data.Csm,
    data.Prowner,
    data.IcpCat,
    data.PSM1,
    data.Freeimg

];
export const careerlist = [
    data.IcpACC,
    data.Scrumatscale,
    data.Csm,
    data.Prowner,
    data.IcpCat,
    data.PSM1,
    data.IcpEnt,
    data.ACSM

];