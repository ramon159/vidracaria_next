// um número no formato internacional (ativo no WhatsApp) number = '55519xxxxxxxx'
// o texto ou algo vindo de um <textarea> ou <input> por exemplo

export default (msg = '') => {
  const phone = 5521964743206
  const encodePhone = encodeURIComponent(phone)
  const encodeMsg = encodeURIComponent(msg)

  return `https://api.whatsapp.com/send?phone=${encodePhone}&text=${encodeMsg}`
}
