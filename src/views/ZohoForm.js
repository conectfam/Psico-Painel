import React, { useEffect } from 'react';

const ZohoForm = ({ username, instituicaoNome, birthDate, cpfFormatted }) => {
  useEffect(() => {
    const script = document.createElement('script');

    const zohoFormUrl = `https://forms.zohopublic.com/conectfam/form/AvalioPsicossocial/formperma/wZJ5Zxg7Md7jWYikTxvWb8ssgtZXSAZwJvCwKvI_6Y8?zf_rszfm=1&nome=${username}&instituicao=${instituicaoNome}&data=${birthDate}&cpf=${cpfFormatted}`;

    script.innerHTML = `(function() {
      try {
        var f = document.createElement("iframe");
        f.src = '${zohoFormUrl}';
        f.style.border="none";
        f.style.height="1220px";
        f.style.width="100%";
        f.style.transition="all 0.5s ease";
        f.setAttribute("aria-label", 'Avalição Psicossocial');

        var d = document.getElementById("zf_div_wZJ5Zxg7Md7jWYikTxvWb8ssgtZXSAZwJvCwKvI_6Y8");
        d.appendChild(f);

        window.addEventListener('message', function (){
          // ... restante do código ...
        }, false);
      } catch(e){}
    })();`;

    document.body.appendChild(script);
  }, [username, instituicaoNome, birthDate, cpfFormatted]);

  return (
    <center>
      <div id="zf_div_wZJ5Zxg7Md7jWYikTxvWb8ssgtZXSAZwJvCwKvI_6Y8" style={{ maxWidth: '100%' }}></div>
    </center>
  );
};

export default ZohoForm;
