type NotificationTypes = 'reaction' | 'comment' | 'group' | 'follow' | 'message';

declare type NotificationITypes = ReactionI | CommentI | GroupI | FollowI | MessageI;

declare interface UserI {
    name: string;
    avatar: string;
}

declare interface NotificationI {
    activity: NotificationTypes;
    user: UserI;
    time: string;
    read: boolean;
}

declare interface ReactionI extends NotificationI {
    activity: 'reaction';
    postname: string;
}

declare interface CommentI extends NotificationI {
    activity: 'comment';
    post: {
        src: string;
    };
}

declare type GroupStatus = 'joined' | 'left';

declare interface GroupI extends NotificationI {
    activity: 'group';
    group: {
        name: string;
        avatar: string;
        status: GroupStatus;
    };
}

declare interface FollowI extends NotificationI {
    activity: 'follow';
}

declare interface MessageI extends NotificationI {
    activity: 'message'
    message: string;
}