import dataProjetos from "../../../../projects.json"

const validacaoFront = dataProjetos.frontend.length > 6 && (
  <div className="showMore">
    <a>Show More</a>
  </div>
)

const validacaoBack = dataProjetos.backend.length > 6 && (
  <div className="showMore">
    <a>Show More</a>
  </div>
)

const validacaoOthers = dataProjetos.others.length > 6 && (
  <div className="showMore">
    <a>Show More</a>
  </div>
)


export { validacaoFront, validacaoBack, validacaoOthers }