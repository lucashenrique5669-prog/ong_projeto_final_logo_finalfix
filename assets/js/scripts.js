
document.addEventListener('DOMContentLoaded',()=>{

  // Máscaras simples
  function maskCPF(v){v=v.replace(/\D/g,'').slice(0,11);v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');return v;}
  function maskCEP(v){v=v.replace(/\D/g,'').slice(0,8);v=v.replace(/(\d{5})(\d)/,'$1-$2');return v;}

  const cpf=document.getElementById('cpf');
  const cep=document.getElementById('cep');

  if(cpf)cpf.addEventListener('input',e=>e.target.value=maskCPF(e.target.value));
  if(cep)cep.addEventListener('input',e=>e.target.value=maskCEP(e.target.value));

  // Validação do formulário
  const form=document.querySelector('form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      let valid=true;
      const required=form.querySelectorAll('[required]');
      required.forEach(f=>{
        f.classList.remove('error');
        if(!f.value.trim()){
          f.classList.add('error');
          valid=false;
        }
      });
      const email=form.querySelector('#email');
      if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        email.classList.add('error');valid=false;
      }
      const cpfInput=form.querySelector('#cpf');
      if(cpfInput && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpfInput.value)){
        cpfInput.classList.add('error');valid=false;
      }
      const msg=form.querySelector('.success-message');
      if(msg)msg.remove();
      if(valid){
        const div=document.createElement('div');
        div.className='success-message';
        div.textContent='Cadastro enviado com sucesso!';
        form.appendChild(div);
        form.reset();
      }else{
        alert('Por favor, corrija os campos destacados.');
      }
    });
  }
<script>
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav.primary ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
</script>
