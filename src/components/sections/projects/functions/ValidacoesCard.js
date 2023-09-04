import dataProjetos from "../../../../projects.json"

const validacaoFront = dataProjetos.automation.length > 6 && (
  <div className="showMore">
    <button id="moreButton">Show More</button>
  </div>
)

const validacaoBack = dataProjetos.certificates.length > 6 && (
  <div className="showMore">
    <button id="moreButton">Show More</button>
  </div>
)


export { validacaoFront, validacaoBack }