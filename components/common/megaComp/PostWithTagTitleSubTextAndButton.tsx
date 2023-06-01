import { buttonType, PostWithTagTitleSubTextAndButtonProps } from "../../../types/softwareproddev";
import ButtonComp from "../Button/Button";
import ButtonWithImgComp from "../Button/ButtonWithImageRight";

const PostWithTagTitleSubTextAndButtonComp = (props: PostWithTagTitleSubTextAndButtonProps) => {
    function tagCheck() {
        if (props.tag) {
            return <h6 className={props.tagclasses} >{props.tag}</h6>;
        }
        return;
    }
    function titleCheck() {
        if (props.title) {
            return <h1 className={props.titleclasses} >{props.title}</h1>;
        }
        return;
    }
    function subTitleCheck() {
        if (props.sub) {
            return <p className={props.subclasses} >{props.sub}</p>;
        }
        return;
    }
    function textCheck() {
        if (props.text) {
            return <p className={props.textclasses} >{props.text}</p>;
        }
        return;
    }
    function buttonCheck() {
        if (props.button) {
            // return <ButtonComp {...props.button} />;
            return <ButtonWithImgComp {...props.button} />
        }
        return;
    }
    return (
        <div className="flex flex-col">
            {tagCheck()}
            {titleCheck()}
            {subTitleCheck()}
            {textCheck()}
            {buttonCheck()}
        </div>
    );
}

export default PostWithTagTitleSubTextAndButtonComp;