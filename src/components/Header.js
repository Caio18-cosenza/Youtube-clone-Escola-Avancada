import { AntDesign, MaterialIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
import { styled } from "nativewind"
import { Text, View, Image } from "react-native"

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const ImageStyled = styled(Image);

export const Header = () => {
    return (
        <ViewStyled className="flex flex-row items-center justify-between px-2 py-2 border-solid border-gray-400 border-b-[0.5px]">
            <ViewStyled className='flex flex-row items-center'>
                <AntDesign name="youtube" size={20} color="red" />
                <TextStyled className='font-bold text-white'> YouTube </TextStyled>
            </ViewStyled>
            <ViewStyled className='flex flex-row items-center'>
              <MaterialIcons name="cast-connected" size={24} color="white" style={{ marginRight: 10 }} />
              <Ionicons name="notifications" size={24} color="white" style={{ marginRight: 10 }} />
              <EvilIcons name="search" size={24} color="white" style={{ marginRight: 10 }} />
              <ImageStyled source={{ uri: 'https://github.com/Caio18-cosenza.png' }} defaultSource={{ uri: 'https://github.com/Caio18-cosenza.png' }} className={'w-6 h-6 rounded-full'} />
            </ViewStyled>
        </ViewStyled>
    )
}