const WA_NUMBER = '5571999999999'

const MESSAGES = {
  fisio: 'Olá! Vi o anúncio sobre o tratamento de assimetria craniana para bebês. Meu filho tem menos de 6 meses e gostaria de saber mais sobre a avaliação.',
  ortese: 'Olá! Vi o anúncio sobre a Órtese Craniana 3D. Meu bebê tem mais de 6 meses e apresenta assimetria craniana. Gostaria de agendar uma avaliação.',
  geral: 'Olá! Gostaria de agendar a avaliação com escaneamento 3D para o meu bebê.',
  assimetria: 'Olá! Gostaria de agendar uma avaliação para o meu bebê sobre assimetria craniana ou torcicolo.',
  sono: 'Olá! Gostaria de saber mais sobre a Consultoria do Sono para o meu bebê.',
  precoce: 'Olá! Gostaria de agendar uma avaliação de Intervenção Precoce para o meu filho.',
}

export function waLink(key = 'geral') {
  const text = encodeURIComponent(MESSAGES[key] ?? MESSAGES.geral)
  return `https://wa.me/${WA_NUMBER}?text=${text}`
}
