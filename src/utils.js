export function formatMonetaire(montant, option) {
    if (option) {
        return montant.toLocaleString(option)
    }
    return montant.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}