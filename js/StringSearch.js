function getTermosPesquisa(idioma) {

    var t = [];
    if(idioma == 'portugues') {
        t.push(' AND+FCPA+OR+corrupcao+OR+“Infração de SEC”+OR+“Infração de valores mobiliários”+OR+infracao+OR+“CVM investiga”+OR+escandalo+OR+prisao+OR+suborno+OR+subornar+OR+propina+OR+corrupto');
        t.push(' AND+“atividade ilegal”+OR+“atividades ilegais”+OR+crime+OR+indiciamento+OR+indiciado+OR+regulatório+OR+alegacao+OR+alegacoes+OR+acusacao+OR+acusacoes+OR+acusado+OR+fraude+OR+"insider trade"+OR+"insider trading"+OR+"crime de guerra"+OR+droga+OR+"organizacao criminosa"+OR+"violencia contra"');
        t.push(' AND+improbidade+OR+superfaturamento+OR+sobrepreco+OR+cartel+OR+antietico+OR+negligencia+OR+impericia+OR+CPI+OR+“comissao parlamentar de inquerito”+OR+"lavagem de dinheiro"+OR+"crime de lavagem"+OR+"crime contra a ordem"+OR+"evasao fiscal"+OR+"paraiso fiscal"');
        t.push(' AND+sancionada+OR+irregularidades+OR+investigacao+OR+irregular+OR+multa+OR+advertencia+OR+penalidade+OR+suspenso+OR+suspensão+OR+falso+OR+falsidade+OR+adulteracao+OR+adulterado+OR+adulterado');
        t.push(' AND+violação+OR+"violação financeira"+OR+"violação ambiental"+OR+"violação de direitos humanos"+OR+escravidão+OR+"condição subhumana"+OR+"condição degradante"+OR+insalubre');
        t.push(' AND+presente+OR+"doação política"+OR+"coisa de valor"+OR+"financiamento ao terrorismo"+OR+terrorismo');
        t.push(' AND+falencia+OR+penhora+OR+processado+OR+apelação+OR+reclamação+OR+intimação+OR+“ação judicial”+OR+“processo judicial”+OR+reclamacao+OR+"violação a propriedade intelectual"+OR+"violação a propriedade industrial"+OR+"violação de patente"+OR+"dificuldade financiera"+OR+"problemas financeiros"+OR+"crise financeira"+OR+insolvencia+OR+insolvente');
        t.push(' AND+"lava jato"+OR+"sergio moro"+OR+"policia federal"+OR+Petrobras+OR+"petroleo brasileiro"+OR+"delacao premiada"+OR+"leniencia"+OR+ "máfia dos remédios"+OR+"mensalão"+OR+"máfia dos vampiros"+OR+mensalinho+OR+sanguessugas+OR+"máfia do lixo"+OR+"banco opportunity"+OR+"operacao vampiro"+OR+" Operação Satiagraha"+OR+"anões do orçamento"+OR+"Operação Navalha"+OR+"juiz lalau"+OR+zelotes');
        t.push(' AND+CPI+OR+testemunho+OR+“comissao parlamentar de inquerito”+OR+indiciado+OR+exonerado+OR+exonerar+OR+afastado+OR+afastar+OR+nomeado+OR+nomear+OR+governo+OR+estado+OR+cargo+OR+publico+OR+politico+OR+servidor+OR+funcionario publico+OR+posse+OR+prefeitura+OR+congresso+OR+assembleia+OR+prefeito+OR+vereador+OR+deputado+OR+senador');
    }
    else {
        t.push(' AND+FCPA+OR+“Exchange Commission”+OR+SEC+OR+“Department of Justice”+OR+corrupt+OR+corruption+OR+scandal+OR+bribe+OR+bribed+OR+bribery+OR+suspend+OR+exclude+OR+prison+OR+investigation+OR+graft');
        t.push(' AND+“illegal activities”+OR+crime+OR+criminal+OR+indict+OR+"insider trade"+OR+"insider trading"+OR+accused+OR+fraud+OR+rigging+OR+launder+OR+"money laundering"+OR+"organized crime"+OR+racketeering+OR+"war crime"+OR+drug+OR+wrongdoing+OR+cartel+OR+"tax evasion"+OR+"tax haven"');
        t.push(' AND+sanctioned+OR+penalty+OR+suspended+OR+suspension+OR+fine+OR+warning+OR+regulatory+OR+irregular+OR+irregularity+OR+fake+OR+false+OR+forged+OR+adulterated');
        t.push(' AND+violate+OR+violation+OR+"financial violation"+OR+"environmental violation"+OR+"human rights violation"+OR+"slavery"+OR+"inhuman conditions"+OR+unhealthy');
        t.push(' AND+gift+OR+"political donation"+OR+donated+OR+"terrorism financing"+OR+"financed terrorism"+OR+terrorism+OR+"things of value"');
        t.push(' AND+bankruptcy+OR+lien+OR+lawsuit+OR+sued+OR+contest+OR+appeal+OR+complaint+OR+subpoena+OR+"patent infringement"+OR+"patent violation"+OR+"IP infringement"+OR+"IP violation"+OR+"financial difficulties"+OR+"financial duress"+OR+insolvency+OR+insolvent');
        t.push(' AND+"Car Wash"+OR+"federal police"+OR+"plea bargaining"+OR+"leniency agreement"');
        t.push(' AND+deposition+OR+"senate hearing"+OR+exonerated+OR+appointed+OR+government+OR+state+OR+"civil servant"+OR+"public service"+OR+politician+OR+party+OR+investiture+OR+"city hall"+OR+municipality+OR+congress+OR+senate+OR+councilman+OR+congressman+OR+senator+OR+mayor+OR+governor');
    }
    return t;
}

pesquisaPortugues = function(){

    var termo = $('#termo').val();

    var termosPesquisa = getTermosPesquisa('portugues');

    for(var i = 0; i < termosPesquisa.length; i++ )
        window.open('http://google.com/search?q='+termo + termosPesquisa[i], '_blank');
    
}

pesquisaIngles = function(termo){

    var termo = $('#term').val();

    var termosPesquisa = getTermosPesquisa('ingles');

    for(var i = 0; i < termosPesquisa.length; i++ )
        window.open('http://google.com/search?q='+termo + termosPesquisa[i], '_blank');
}