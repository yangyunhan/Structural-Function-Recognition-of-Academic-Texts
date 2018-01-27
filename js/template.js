/**
 * Created by yunhan on 2017/9/22.
 */
function Template(paper) {
    var myTemplate = Handlebars.compile($("#paper-template").html());
    $('#searchResultsList').html(myTemplate(paper));
}

$(document).ready(function () {
    //模拟的json对象
    var paper={
        "paper":[
            {"paperIndex":"0",
                "paperName":"Principles for Strengthening the Integrity of Clinical Research",
                "paperAuthor":"David Korn, Susan Ehringhaus",
                "paperType":"Essay",
                "paperDate":"21 Apr 2006",
                "paperJournal":"PLOS ONE",
                "paperDoi":"https://doi.org/10.1371/journal.pctr.0010001",
                "paperView":"16116",
                "paperCitation":"0",
                "paperDownload":"22",
                "paperAbstract":"This paper proposes entitymetrics to measure the impact of knowledge units.",
                "paperIntroduction":" often referred to ",
                "paperMethodology":"Metformin (N,N-dimethylbiguanide) is often referred to as a magic drug.",
                "paperResDis":"In total, the entity-entity citation network based on Metformin information",
                "paperConclusion":"This paper proposes entitymetrics to measure the impact of knowledge units at"
            },
            {"paperIndex":"1",
                "paperName":"Principles for Strengthening the Integrity of Clinical Research",
                "paperAuthor":"David Korn, Susan Ehringhaus",
                "paperType":"Essay",
                "paperDate":"21 Apr 2006",
                "paperJournal":"PLOS ONE",
                "paperDoi":"https://doi.org/10.1371/journal.pctr.0010001",
                "paperView":"16116",
                "paperCitation":"0",
                "paperDownload":"22",
                "paperAbstract":"This paper proposes entitymetrics to measure the impact of knowledge units.",
                "paperMethodology":"Metformin (N,"+"N-dimethylbiguanide) is often referred to as a magic drug.",
                "paperResDis":"In total, the entity-entity citation network based on Metformin information",
                "paperConclusion":"This paper proposes entitymetrics to measure the impact of knowledge units at"
            }
        ]
    };
    Template(paper);
    Height('.all-site-wrap');
});