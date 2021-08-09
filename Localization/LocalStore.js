import i18n from 'i18n-js';

i18n.translations = {
    en: { 
        yes: 'Yes',
        no: 'No',
        ok: 'Ok',
        details: 'Details',

        signin: 'Sign In',
        logout: 'Logout',
        logoutConfirmation: 'Are you sure? You want to logout?',

        balance: 'Balance', 
        eligibility: 'ELIGIBILITY',
        check: 'CHECK',
        debt: 'DEBT',
        status: 'STATUS',
        apply: 'APPLY FOR',
        loan: 'A LOAN',
        repay: 'REPAY',
        myLoan: 'MY LOAN',
        demoApp: 'Demo Mobile Wallet App',

        eligibilityDesc: 'Your eligibility will be checked based on your transactional data. Do you agree to share your data for that purpose? \nYou can read Terms and Conditions by clicking on the left menu.',
        eligibilityResult: 'Dear customer, you are eligible for the loan amounts: ',

        debtStatus: 'Debt Status',
        debtStatusDesc: 'You have an outstanding amount of {amount} which is due on {date}',

        openInBrowser: 'Open Simbrella in Browser',
        language: 'Language',
        notifications: 'Notifications',
        home: 'Home',
        actions: 'Actions',
        history: 'History',
        settings: 'Settings',
        aboutSimbrella: 'About Simbrella',
        tc: 'Terms and Conditions',
    },
    fr: { 
        yes: 'Oui',
        no: 'Non',
        ok: 'D\'accord',
        details: 'Détails',

        signin: 'S\'identifier',
        logout: 'Se déconnecter',
        logoutConfirmation: 'Es-tu sûr? Vous souhaitez vous déconnecter ?',

        balance: 'La Balance',
        eligibility: 'ADMISSIBILITÉ',
        check: 'VÉRIFIER',
        debt: 'DETTE',
        status: 'STATUT',
        apply: 'APPLIQUER',
        loan: 'UN PRÊT',
        repay: 'REMBOURSER',
        myLoan: 'MON PRÊT',
        demoApp: 'Application de démonstration de portefeuille mobile',

        eligibilityDesc: 'Votre éligibilité sera vérifiée en fonction de vos données transactionnelles. Acceptez-vous de partager vos données à cette fin ? \nVous pouvez lire les conditions générales en cliquant sur le menu de gauche.',
        eligibilityResult: 'Cher client, vous êtes éligible aux montants du prêt: ',

        debtStatus: 'État de la dette',
        debtStatusDesc: 'Vous avez un encours de {amount} qui est dû le {date}',

        openInBrowser: 'Ouvrez Simbrella dans le navigateur',
        language: 'Langue',
        notifications: 'Notifications',
        home: 'Domicile',
        actions: 'Actions',
        history: 'Histoire',
        settings: 'Paramètres',
        aboutSimbrella: 'À propos de Simbrella',
        tc: 'Termes et conditions',
    },
};

i18n.fallbacks = true;

export default i18n;