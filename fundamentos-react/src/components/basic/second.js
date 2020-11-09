const Second = (props) => {
    const status = (props.score < 6)?'Reprovado':'Aprovado';
    return(
        <div>
            <h2>{props.title}</h2>
            <strong>{props.student}</strong> têm nota <strong>{props.score}</strong>: <strong>{status}</strong>
        </div>
    );
};

export default Second;