import { ITrack } from '../types/ITrack';

export const TRACKS: ITrack[] = [
    {
        _id: '1',
        artist: 'Artist',
        name: 'Name',
        audio: 'http://localhost:5000/audio/b9cdc42a-b33f-4b80-9086-51d684e07de5.mp3',
        comments: [
            {
                _id: '1',
                text: 'Cool',
                username: 'UserName'
            }
        ],
        text: 'Song text',
        listens: 0,
        picture: 'http://localhost:5000/image/699b545e-871e-46a8-be90-efd5519a096b.jpg',
    },
    {
        _id: '2',
        artist: 'Artist',
        name: 'Name',
        audio: 'http://localhost:5000/audio/b9cdc42a-b33f-4b80-9086-51d684e07de5.mp3',

        comments: [
            {
                _id: '1',
                text: 'Cool',
                username: 'UserName'
            }
        ],
        text: 'Song text',
        listens: 0,
        picture: 'http://localhost:5000/image/699b545e-871e-46a8-be90-efd5519a096b.jpg',
    },
    {
        _id: '3',
        artist: 'Artist',
        name: 'Name',
        audio: 'http://localhost:5000/audio/b9cdc42a-b33f-4b80-9086-51d684e07de5.mp3',
        comments: [
            {
                _id: '1',
                text: 'Cool',
                username: 'UserName'
            }
        ],
        text: 'Song text',
        listens: 0,
        picture: 'http://localhost:5000/image/699b545e-871e-46a8-be90-efd5519a096b.jpg',
    }
]